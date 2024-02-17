import React from "react";
import { useForm } from "react-hook-form";
import "./register.scss";
import axios from "axios";
import { signUp } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register, formState, handleSubmit, watch } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const { errors, isSubmitting } = formState;

  const navigate = useNavigate();

  async function onSubmit(data) {
    console.log(data);
    const user = {
      username: data.username,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname,
      role: "user",
    };

    const result = await signUp(user);
    console.log(result);
    if (result.success && result.body) {
      navigate("/login");
    }
  }

  return (
    <div className="register d-flex justify-content-center align-items-center flex-column ">
      <h1 className="mt-5">Online Registration Form</h1>
      <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-5 d-flex flex-column justify-content-center align-items-baseline">
          <label className="text-white fs-3 mb-2 ">Firstname</label>
          <input
            className="input w-100"
            type="text"
            {...register("firstname", {
              required: "You must enter your Firstname",
              minLength: {
                value: 3,
                message: "Firstname must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Firstname must be 10 Characters at most",
              },
            })}
          />
        </div>
        <div className=" mb-5 d-flex flex-column justify-content-center align-items-baseline">
          <label className="text-white fs-3 mb-2 ">Lastname</label>
          <input
            className="input w-100"
            type="text"
            {...register("lastname", {
              required: "You must enter your Lastname",
              minLength: {
                value: 3,
                message: "Lastname must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Lastname must be 10 Characters at most",
              },
            })}
          />
        </div>
        <div className=" mb-5 d-flex flex-column justify-content-center align-items-baseline">
          <label className="text-white fs-3 mb-2 ">Username</label>
          <input
            className="input w-100"
            type="text"
            {...register("username", {
              required: "You must enter your Username",
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
        </div>
        <div className=" mb-5 d-flex flex-column justify-content-center align-items-baseline">
          <label className="text-white fs-3 mb-2 ">Password</label>
          <input
            className="input w-100"
            type="text"
            {...register("password", {
              required: "You must enter your Password",
              minLength: {
                value: 3,
                message: "Password must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Password must be 10 Characters at most",
              },
            })}
          />
          {errors.password && (
            <p className="errors">{errors.Password.message}</p>
          )}
        </div>
        {/* <div className=" mb-5 d-flex flex-column justify-content-center align-items-baseline">
          <label className="text-white fs-3 mb-2 ">Confirm Password</label>
          <input
            className="input w-100"
            type="text"
            {...register("ConfirmPassword", {
              required: "You Must Enter Password",
              validate(value) {
                if (watch("password") !== value) {
                  return "Confirm Password Is Not Equel To Password";
                }
              },
            })}
          />
          {errors.password && (
            <p className="errors">{errors.ConfirmPassword.message}</p>
          )}
        </div> */}
        <div>
          <div className="form-check">
            <input
              className="me-2 fs-3 input-check"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              {...register("policy")}
            />
            <label
              className="check-label text-white fs-4"
              htmlFor="flexCheckDefault"
            >
              I accept the Terms of Use & Privacy Policy
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
              Sing Up
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
