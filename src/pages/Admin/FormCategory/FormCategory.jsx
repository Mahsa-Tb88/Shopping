import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./formCategory.scss";
export default function FormCategory({ onSubmit, type, category }) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      title: category ? category.title : "",
      slug: category ? category.slug : "",
    },
  });
  const { errors, isSubmitting } = formState;

  return (
    <form className="ms-3  mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="table">
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Title of Category</label>
          <input
            type="text"
            className="inputCategory w-75 px-2 py-2 rounded-1"
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
          <label className="mb-1 label fs-3">Slug of Product</label>
          <textarea
            type="text"
            className="inputCategory w-75 px-2 py-2 rounded-1"
            {...register("slug", {
              required: "You must enter a family",
              minLength: {
                value: 3,
                message: "Slug must be 3 Characters at least",
              },
              maxLength: {
                value: 10,
                message: "Family must be 10 Characters at most",
              },
            })}
          ></textarea>
          {errors.slug && (
            <p className="errors mt-2 fs-5">{errors.slug.message}</p>
          )}
        </div>
        {isSubmitting ? (
          <button
            type="submit"
            className="btn-submit border-0 py-2 fs-3 mt-5 disabled"
          >
            <span className="spinner-grow spinner-spinner-grow-sm"></span>
          </button>
        ) : (
          <div>
            <button
              type="submit"
              className="btn-submit border-0 py-3 fs-3 my-5"
            >
              {type == "new" ? "Create Category" : "Save Category"}
            </button>
            <Link to="/admin/categories"  className="btn-Cansel text-center border-0 py-3 fs-3 my-5 link ms-5">Cansel</Link>
          </div>
        )}
      </div>
    </form>
  );
}
