import React, { useEffect, useState } from "react";
import "./usersAdmin.scss";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { getUsers, removeUserById } from "../../../utils/api";
import Pagination from "../../Share/Pagination/Pagination";
import { useAppContext } from "../../../context/AppContext";

export default function UsersAdmin() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(null);
  let numOfPage = Math.ceil(parseInt(totalUsers) / 6);
  const [searchParams, setSearchParams] = useSearchParams();
  const { appState } = useAppContext();
  useEffect(() => {
    document.title = "Managing Users";
    const page = searchParams.get("page") ?? 1;
    setPage(+page);
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(fetchUsers, 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  async function fetchUsers() {
    const result = await getUsers();
    if (result.success) {
      setError(false);
      setUsers(result.body);
      setTotalUsers(result.totalUsers.all);
      console.log(result);
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
    const result = await removeUserById(id);
    if (result.success) {
      const result = await getUsers();
      if (result.success) {
        setUsers(result.body);
        toast.update(t, {
          render: <p className="fs-4">The category deleted successfully!</p>,
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
        : result.code == 403
        ? toast.update(t, {
            render: <p className="fs-4">Admin is not removed!</p>,
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

  return (
    <div className="userAdmin">
      <h1>Managing Users</h1>
      <div className="addNewUser d-flex justify-content-center align-items-center">
        <Link className="addUserBtn link" to="new">
          <span>Add User</span>
          <FaPlus className="iconPlusUser" />
        </Link>
      </div>
      {isLoading ? (
        <div className="fs-2 w-75 text-center loadingUserAdmin">
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
          <div className="w-75">
            <table className="table table-bordered table-striped text-center my-5">
              <thead className="table-dark">
                <tr className="table-row">
                  <th scope="col" className="fs-3">
                    Username
                  </th>
                  <th scope="col" className="fs-3">
                    Name & Family
                  </th>
                  <th scope="col" className="fs-3">
                    role
                  </th>
                  <th scope="col" className="fs-3">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((p) => {
                  return (
                    <tr key={p.id} className="table-row">
                      <td>
                        <span className=" fs-4 px-2">{p.username}</span>
                      </td>
                      <td className="fs-4">
                        {p.firstname} {p.lastname}
                      </td>
                      <td className="fs-4">{p.role}</td>
                      <td>
                        <div className=" d-flex justify-content-center align-items-center">
                          <span
                            className="operation-trash d-flex justify-content-center align-items-center   me-5"
                            onClick={() => removeCategoryHandler(p.id)}
                          >
                            <FaRegTrashAlt className="fs-4" />
                          </span>
                          <Link
                            className="operation-edit  d-flex justify-content-center align-items-center"
                            to={"edit/" + `${p.id}`}
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
