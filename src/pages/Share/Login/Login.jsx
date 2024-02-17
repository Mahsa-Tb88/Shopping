import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { login } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { register, handleSubmit, formState } = useForm({});
  const { errors, isSubmitting } = formState;

  const navigate = useNavigate();

  async function onSubmit(data) {
    console.log("login");
    console.log(data);
    const user = { username: data.username, password: data.password };
    const result = await login(user);
    if (result.success) {
      navigate("/panel");
      if (data.remmembering) {
        localStorage.token = JSON.stringify(result.body.token);
      } else {
        sessionStorage.token = JSON.stringify(result.body.token);
      }
    }

    // if (result.body.role=="admin"){
    //   navigate("/")
    // }else{
    //   navigate("/")
    // }
  }
  return (
    <div className=" login d-flex flex-column justify-content-center align-items-center ">
      <h1 className="mt-5">Sign In</h1>
      <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
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
            <p className="errors">{errors.username.message}</p>
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
                value: 3,
                message: "password must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "password must be 10 Characters at most",
              },
            })}
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
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
