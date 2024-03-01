import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import "./editform.scss";
export default function EditForm({ onSubmit, type, product }) {
  const { appState, appDispatch } = useAppContext();
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      title: product ? product.title : "",
      description: product ? product.description : "",
      price: product ? "$ " + product.price : "$ ",
      category: product ? product.title : "Body Care",
      image: product ? product.image : "",
    },
  });
  const { errors, isSubmitting } = formState;

  return (
    <form className="ms-3  mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="table">
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Title of Product</label>
          <input
            type="text"
            className="inputProducts w-75 px-2 py-2 rounded-1"
            {...register("title", {
              required: "You must enter a title of product",
              minLength: {
                value: 3,
                message: "title must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "title must be 10 Characters at most",
              },
            })}
          />
          {errors.title && <p className="errors">{errors.title.message}</p>}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Description of Product</label>
          <input
            type="text"
            className="inputProducts w-75 px-2 py-2 rounded-1"
            {...register("description", {
              required: "You must enter a family",
              minLength: {
                value: 10,
                message: "Family must be 3 Characters at least",
              },
              maxLength: {
                value: 700,
                message: "Family must be 10 Characters at most",
              },
            })}
          />
          {errors.family && <p className="errors">{errors.family.message}</p>}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Price of Product</label>
          <input
            type="text"
            className="inputProducts w-75 px-2 py-2 rounded-1"
            {...register("price", {
              required: "You must enter a Phone number",
              minLength: {
                value: 12,
                message: "It is short, Phone number must be 12 number",
              },
              maxLength: {
                value: 12,
                message: "It is long, Phone number must be 12 number",
              },
            })}
          />
          {errors.phone && <p className="errors">{errors.phone.message}</p>}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Category of Product</label>
          <select
            className="inputProducts w-25 px-2 py-2 rounded-1"
            {...register("category", {
              required: "Select the category",
            })}
          >
            {appState.categories.map((c) => (
              <option key={c.title} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="errors">{errors.category.message}</p>
          )}
        </div>
        <div className="d-flex  flex-column justify-content-center align-items-start mt-5 mb-4">
          <label className="mb-1 label fs-3">Image of Product</label>

          <div className="d-flex justify-content-center mt-2 image-product">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <button className="btn-select mt-5 mb-4 text-white px-4 py-2 border-0 fs-3">
                Select Image
              </button>
              <button className="btn-remove text-white px-4 py-2 border-0 fs-3">
                Remove Image
              </button>
            </div>
            <img
              src={product ? "http://server.test" + product.image : ""}
              {...register("image", {
                required: "You must select a image of product",
              })}
            />
          </div>
          {errors.image && <p className="errors">{errors.image.message}</p>}
        </div>

        <div>
          {isSubmitting ? (
            <button
              type="submit"
              className="btn-submit border-0 py-2 fs-3 mt-5 disabled"
            >
              <span className="spinner-grow spinner-spinner-grow-sm"></span>
            </button>
          ) : (
            <button
              type="submit"
              className="btn-submit border-0 py-3 fs-3 my-5"
            >
              {type == "new" ? "Create Product" : "Save Product"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
