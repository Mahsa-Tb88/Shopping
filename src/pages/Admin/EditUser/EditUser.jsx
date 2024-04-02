import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../../utils/api";
import Loading from "../../../components/Loading/Loading";
import FormUser from "../FormUser/FormUser";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useAppContext } from "../../../context/AppContext";

export default function EditUser() {
  const { appState, appDispatch } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [failMessage, setFailMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Edit User";
    const timeOut = setTimeout(fetchUser, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function fetchUser() {
    const result = await getUserById(id);
    if (result.success) {
      setError(false);
      setUser(result.body);
    } else {
      setError(result.message);
    }
    setIsLoading(false);
  }

  async function submitHandler(data) {
    const { firstname, lastname, password, role } = data;
    setFailMessage("");
    setSuccessMessage("");
    const result = await updateUser(id, firstname, lastname, password, role);
    if (result.success) {
      setFailMessage(false);
      setSuccessMessage("The user updated successfully");
      if (+params.id === appState.user.id) {
        const newUser = {
          isLoggedIn: true,
          isAdmin: data.role == "admin",
          Username: appState.user.Username,
          firstname: data.firstname,
          lastname: data.lastname,
          role: data.role,
        };
        appDispatch({ type: "setUser", payload: newUser });
      }
      setTimeout(() => {
        navigate("/admin/users");
      }, 2000);
    } else {
      setFailMessage(result.message);
    }
  }
  return (
    <div className="px-2 px-md-4 py-5 ">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div>
          {failMessage && (
            <div>
              <h2 className=" bg-white text-danger mb-5 fs-2 py-3 d-flex justify-content-center align-items-center">
                <MdOutlineError className="error me-3" />
                {failMessage}
              </h2>
            </div>
          )}
          {successMessage && (
            <div>
              <h2 className=" bg-white text-success mb-5 fs-3 py-3 px-3  d-flex justify-content-center align-align-items-baseline ">
                <FaCheckCircle className="check me-3" />
                {successMessage}
              </h2>
            </div>
          )}
          <h1>Edit User</h1>
          <FormUser type="edit" onSubmit={submitHandler} user={user} />
        </div>
      )}
    </div>
  );
}
