import React, { useEffect, useState } from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { login } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
export default function Login() {
  const { register, handleSubmit, formState } = useForm({});
  const { errors, isSubmitting } = formState;
  const { appState, appDispatch } = useAppContext();

  const [failMessage, setFailMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (appState.user.isLoggedIn) {
      navigate("/panel");
    }
    document.title = "Login Page";
  }, []);

  async function onSubmit(data) {
    const result = await login({
      username: data.username,
      password: data.password,
    });
    if (result.success) {
      const { user, token } = result.body;
      user.isLoggedIn = true;
      user.isAdmin = user.role == "admin";
      appDispatch({ type: "setUser", payload: user });
      navigate("/panel");

      if (data.remmembering) {
        localStorage.token = token;
      } else {
        sessionStorage.token = token;
      }
    } else {
      setFailMessage(result.message);
    }
  }
  return (
    <div className=" login d-flex flex-column justify-content-center align-items-center ">
      <h1 className="mt-5">Sign In</h1>
      <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
        {failMessage.length > 0 && (
          <div className="mb-4">
            <h5 className="fs-3 text-danger text-center bg-white py-2">
              {failMessage}
            </h5>
          </div>
        )}
        <div className="d-flex  flex-column justify-align-content-center align-items-baseline mb-5">
          <label className="text-white fs-3 mb-2 ">Username</label>
          <input
            className="input w-100 "
            type="text"
            {...register("username", {
              required: "You must enter your username",
              minLength: {
                value: 3,
                message: "Username must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Username must be 10 Characters at most",
              },
            })}
          />
          {errors.username && (
            <p className="errors mt-2 text-white">{errors.username.message}</p>
          )}
        </div>
        <div className="d-flex  flex-column justify-align-content-center align-items-baseline mb-5">
          <label className="text-white fs-3 mb-2">Password</label>
          <input
            className="input w-100"
            type="password"
            {...register("password", {
              required: "You must enter your password",
              minLength: {
                value: 6,
                message: "password must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "password must be 10 Characters at most",
              },
            })}
          />
          {errors.password && (
            <p className="errors mt-2 text-white">{errors.password.message}</p>
          )}
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input fs-5"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              {...register("remmembering")}
            />
            <label
              className="check-label text-white fs-4"
              htmlFor="flexCheckDefault"
            >
              Remmeber me
            </label>
          </div>
        </div>
        <div className="mt-5 text-center">
          {isSubmitting ? (
            <button type="submit" className="btn-submit disabled">
              <span className="spinner-grow spinner-spinner-grow-sm"></span>
            </button>
          ) : (
            <button type="submit" className="btn-submit ">
              Sing In
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
