import React from "react";
import "./blogadmin.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getBlogs, removeBlogById } from "../../../utils/api";
import { toast } from "react-toastify";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "../../../components/Share/Pagination/Pagination";
import { useAppContext } from "../../../context/AppContext";

export default function BlogAdmin() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { appState } = useAppContext();

  useEffect(() => {
    document.title = "Managing Blog";
    const page = searchParams.get("page") ?? 1;
    setPage(+page);
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(() => fetchBlogs(), 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  async function fetchBlogs() {
    setIsLoading(true);
    const result = await getBlogs(page);
    if (result.success) {
      setBlogs(result.body);
      setErrorLoading(false);
      setTotalBlogs(result.totalBlogs.all);
    } else {
      setErrorLoading(result.message);
    }
    setIsLoading(false);
  }
  async function removeBlogHandler(id) {
    if (!confirm("Are you sure for deleting the Blog?")) {
      return;
    }
    const t = toast.loading("Deleating...", {
      theme: appState.them,
      style: { fontSize: 15 },
    });
    const result = await removeBlogById(id);
    if (result.success) {
      const result = await getBlogs();
      if (result.success) {
        setBlogs(result.body);
        toast.update(t, {
          render: <p className="fs-4">The Blog deleted successfully!</p>,
          isLoading: false,
          type: "success",
          autoClose: 2000,
        });
      }
    } else {
      result.code == 404
        ? toast.update(t, {
            render: <p className="fs-4">There is not any user with this id!</p>,
            isLoading: false,
            type: "error",
            autoClose: 2000,
          })
        : toast.update(t, {
            render: <p className="fs-4">Connection Error!</p>,
            isLoading: false,
            type: "error",
            autoClose: 2000,
          });
    }
  }

  function pageHandler(i) {
    setSearchParams({ page: i });
  }

  const numOfPage = Math.ceil(totalBlogs / 5);
  return (
    <div className="blogAdmin">
      <h1>Managing Blogs</h1>
      <div className="addNewBlog d-flex justify-content-center align-items-center">
        <Link className="addBlogBtn link" to="new">
          <span>Add Blog</span>
          <FaPlus className="iconPlusUser" />
        </Link>
      </div>
      {isLoading ? (
        <div className="fs-2 w-75 text-center loadingBlogAdmin">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : errorLoading ? (
        <div className="text-center loadingBlogAdmin w-75">
          <p className="fs-1">{errorLoading}</p>
          <button className="btn-tryAgain fs-3" onClick={() => fetchBlogs()}>
            Try Again
          </button>
        </div>
      ) : (
        <div>
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
                {blogs.map((b) => {
                  return (
                    <tr key={b.id} className="table-row">
                      <td>
                        <span className=" fs-4 px-2">{b.title}</span>
                      </td>
                      <td className="fs-4">{b.slug}</td>
                      <td>
                        <div className=" d-flex justify-content-center align-items-center">
                          <span
                            className="operation-trash d-flex justify-content-center align-items-center   me-5"
                            onClick={() => removeBlogHandler(b.id)}
                          >
                            <FaRegTrashAlt className="fs-4" />
                          </span>
                          <Link
                            className="operation-edit  d-flex justify-content-center align-items-center"
                            to={"edit/" + `${b.id}`}
                          >
                            <FaRegEdit className="fs-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div>
              <Pagination
                numOfPage={numOfPage}
                page={page}
                pageHandler={pageHandler}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
