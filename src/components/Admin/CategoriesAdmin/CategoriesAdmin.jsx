import React, { useEffect, useState } from "react";
import "./categoriesAdmin.scss";
import { useAppContext } from "../../../context/AppContext";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteCategory, getCategories } from "../../../utils/api";
export default function CategoriesAdmin() {
  const { appState, appDispatch } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [totalCategories, setTotalCategories] = useState({});

  useEffect(() => {
    document.title = "Managing Categories";
    const timeOut = setTimeout(fetchCategories, 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(searchParams.get("page"));
    }
  }, []);
  let numOfPage = Math.ceil(parseInt(totalCategories.all) / 4);

  // if (searchParams.get("page")) {
  //   setPage(searchParams.get("page"));
  // }

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
    const result = await deleteCategory(id);
    if (result.success) {
      let result = await getCategories(page);
      console.log(page, result);
      if (result.success) {
        if (result.body.length == 0 && page > 1) {
          let result = await getCategories(page - 1);
          setCategories(result.body);
          setSearchParams({ page: page - 1 });
          console.log("....", result.totalCategories.all);
          setTotalCategories({ all: result.totalCategories.all });
        } else {
          setCategories(result.body);
        }
        toast.success("The product deleted successfully!");
      } else {
        toast.error(result.message);
      }
    } else {
      toast.error(result.message);
    }
  }
  return (
    <div className="CategoriesAdmin">
      <h1>Managing Categories</h1>
      <div className="addCategory d-flex justify-content-center align-items-center">
        <Link className="addCategoryBtn link" to="new">
          Add Category
        </Link>
        <FaPlus className="iconPlusCategory" />
      </div>
      {isLoading ? (
        <div className="fs-2 w-75 text-center loadingCategoryAdmin">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : error ? (
        <div className="text-center loadingProductsAdmin w-75">
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
            <div className="w-75">
              <table className="table table-bordered table-striped text-center my-5">
                <thead className="table-dark">
                  <tr className="table-row">
                    <th scope="col" className="fs-3">
                      Title
                    </th>
                    <th scope="col" className="fs-3">
                      Slug
                    </th>
                    <th scope="col" className="fs-3">
                      Operation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((p) => {
                    return (
                      <tr key={p.id} className="table-row">
                        <td>
                          <span className=" fs-4 px-2">{p.title}</span>
                        </td>
                        <td className="fs-4">{p.slug}</td>

                        <td>
                          <div className=" d-flex justify-content-center align-items-center">
                            <span
                              className="operation-trash d-flex justify-content-center align-items-center   me-5"
                              onClick={() => removeCategoryHandler(p.id)}
                            >
                              <FaRegTrashAlt className="fs-4" />
                            </span>
                            <span className="operation-edit  d-flex justify-content-center align-items-center">
                              <FaRegEdit className="fs-4" />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <PaginationProducts
                numOfPage={numOfPage}
                page={page}
                setPage={setPage}
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

function PaginationProducts({ numOfPage, setPage, page }) {
  console.log(numOfPage);
  const [searchParams, setSearchParams] = useSearchParams("");
  let pages = [];
  const prevClasses = ["page-link", page == 1 ? "disabled" : ""].join(" ");
  const nextClasses = ["page-link", page == numOfPage ? "disabled" : ""].join(
    " "
  );
  function pageHandler(i) {
    setPage(i);
    setSearchParams({ page: i });
  }
  function pageFirstHandler() {}
  function pageLastHandler() {}
  for (let i = 1; i <= numOfPage; i++) {
    pages.push(
      <i
        key={i}
        className={"page-link " + (page == i ? "active" : "")}
        onClick={() => pageHandler(i)}
      >
        <span className="page-Item">{i}</span>
      </i>
    );
  }

  if (numOfPage == 1) {
    return;
  }

  return (
    <nav className=" d-flex justify-content-center align-items-center paginate pagination">
      <ul className="d-flex justify-content-center align-items-center">
        <i className={prevClasses} onClick={() => pageFirstHandler()}>
          <span className="page-Item">
            <FaAngleDoubleLeft />
          </span>
        </i>
        {pages}
        <i className={nextClasses} onClick={() => pageLastHandler()}>
          <span className="page-Item">
            <FaAngleDoubleRight />
          </span>
        </i>
      </ul>
    </nav>
  );
}
