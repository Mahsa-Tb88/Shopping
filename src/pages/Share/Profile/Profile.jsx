import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import "./profile.scss";
export default function Profile() {
  const { appState, appDispatch } = useAppContext();
  console.log(appState.user);
  useEffect(() => {
    document.title = "Edit Profile";
  }, []);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: appState.user.firstname,
      family: appState.user.lastname,
      username: appState.user.username,
    },
  });
  const { errors, isSubmitting } = formState;

  function onSubmit(data) {}
  return (
    <div className="container profile-user">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Name</label>
          <input
            type="text"
            className=" w-75 px-2 py-3 rounded-1 input"
            {...register("name", { required: "You must enter a name" })}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Family</label>
          <input
            type="text"
            className=" w-75 px-2 py-3 rounded-1 input"
            {...register("family", { required: "You must enter a Family" })}
          />
          {errors.name && <p className="errors">{errors.family.message}</p>}
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Username</label>
          <input
            type="text"
            className=" w-75 px-2 py-3 rounded-1 input"
            {...register("username", {
              disabled: true,
            })}
          />
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Password</label>
          <input
            type="text"
            className=" w-75 px-2 py-3 rounded-1 input"
            {...register("password")}
          />
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Confirm Password</label>
          <input
            type="text"
            className=" w-75 px-2 py-3 rounded-1 input"
            {...register("confirm")}
          
          />
          {errors.name && <p className="errors">{errors.confirm.message}</p>}
        </div>
      </form>
    </div>
  );
}
