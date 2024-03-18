import React, { useEffect, useState } from "react";
import "./usersAdmin.scss";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { getUsers, removeUserById } from "../../../utils/api";

export default function UsersAdmin() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Managing Users";
    const timeOut = setTimeout(fetchUsers, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function fetchUsers() {
    const result = await getUsers();
    if (result.success) {
      setError(false);
      setUsers(result.body);
    } else {
      setError({ message: result.message });
    }
    setIsLoading(false);
  }

  async function removeCategoryHandler(id) {
    if (!confirm("Are you sure for deleting the category?")) {
      return;
    }
    const result = await removeUserById(id);
    if (result.success) {
      const result = await getUsers();
      if (result.success) {
        setUsers(result.body);
        toast.success("The user deleted successfully!");
      }
    } else {
      result.code == 404
        ? toast.error("There is not any user with this id!")
        : result.code == 403
        ? toast.error("Admin is not removed!")
        : "Error Connection";
    }
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
          </div>
        </div>
      )}
    </div>
  );
}
