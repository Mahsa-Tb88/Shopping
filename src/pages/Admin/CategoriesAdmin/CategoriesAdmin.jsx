import React, { useEffect, useState } from "react";
import "./categoriesAdmin.scss";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteCategory, getCategories } from "../../../utils/api";
import Pagination from "../../../components/Share/Pagination/Pagination";
import { useAppContext } from "../../../context/AppContext";
import { Helmet } from "react-helmet";

export default function CategoriesAdmin() {
  const limit = 5;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [totalCategories, setTotalCategories] = useState({});
  const { appState } = useAppContext();
  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setPage(+page);
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(fetchCategories, 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  let numOfPage = Math.ceil(parseInt(totalCategories.all) / limit);

  async function fetchCategories() {
    const result = await getCategories(page);
    if (result.success) {
      setError(false);
      setCategories(result.body);
      setTotalCategories(result.totalCategories);
    } else {
      setError({ message: result.message });
    }
    setIsLoading(false);
  }

  async function removeCategoryHandler(id) {
    if (!confirm("Are you sure for deleting the category?")) {
      return;
    }
    const t = toast.loading("Deleating...", {
      theme: appState.them,
      style: { fontSize: 15 },
    });
    const result = await deleteCategory(id);
    if (result.success) {
      let result = await getCategories(page);
      if (result.success) {
        if (result.body.length == 0 && page > 1) {
          setSearchParams({ page: page - 1 });
        } else {
          setCategories(result.body);
        }
        toast.update(t, {
          render: <p className="">The category deleted successfully!</p>,
          isLoading: false,
          type: "success",
          autoClose: 2000,
        });
      } else {
        toast.update(t, {
          render: <p className="fs-4">Something wrong!</p>,
          isLoading: false,
          type: "error",
          autoClose: 2000,
        });
      }
    } else {
      result.code == 400
        ? toast.update(t, {
            render: <p className="fs-4">SThis Category is not empty!</p>,
            isLoading: false,
            type: "error",
            autoClose: 2000,
          })
        : result.code == 403
        ? toast.update(t, {
            render: <p className="fs-4">You do not have an authorization!</p>,
            isLoading: false,
            type: "error",
            autoClose: 2000,
          })
        : toast.update(t, {
            render: <p className="fs-4">Error Connection!</p>,
            isLoading: false,
            type: "error",
            autoClose: 2000,
          });
    }
  }
  function pageHandler(i) {
    setSearchParams({ page: i });
  }
  return (
    <div className="CategoriesAdmin  px-2 px-md-4 py-5">
      <Helmet>
        <title>Managing Categories</title>
      </Helmet>
      <h1>Managing Categories</h1>
      <Link
        className="addCategory link d-flex justify-content-center align-items-center"
        to="new"
      >
        <div className="addCategoryBtn ">Add Category</div>
        <FaPlus className="iconPlusCategory" />
      </Link>
      {isLoading ? (
        <div className="fs-2 w-75 text-center loadingCategoryAdmin">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : error ? (
        <div className="text-center loadingProductsAdmin w-75 ">
          <p className="fs-1">{error.message}</p>
          <button
            className="btn-tryAgain fs-3"
            onClick={() => fetchCategories()}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          {categories.length ? (
            <div className="w-md-75 ">
              <table className="table table-bordered table-striped text-center my-5">
                <thead className="table-dark">
                  <tr className="table-row">
                    <th scope="col">Title</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((p) => {
                    return (
                      <tr key={p.id} className="table-row">
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            {p.title}
                          </div>
                        </td>
                        <td>{p.slug}</td>

                        <td>
                          <div className=" d-flex justify-content-center align-items-center">
                            <span
                              className="operation-trash d-flex justify-content-center align-items-center  me-md-5"
                              onClick={() => removeCategoryHandler(p.id)}
                            >
                              <FaRegTrashAlt />
                            </span>
                            <Link
                              className="operation-edit  d-flex justify-content-center align-items-center"
                              to={"edit/" + `${p.id}`}
                            >
                              <FaRegEdit />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <Pagination
                numOfPage={numOfPage}
                page={page}
                pageHandler={pageHandler}
              />
            </div>
          ) : (
            <p className="text-center cardEmpty fs-2">There is no Category</p>
          )}
        </div>
      )}
    </div>
  );
}
