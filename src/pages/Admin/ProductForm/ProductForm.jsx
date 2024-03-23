import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import "./productform.scss";
import noImage from "../../../assets/images/no-image.jpg";
import { createProduct, updateProduct, uploadFile } from "../../../utils/api";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductForm({ type, product }) {
  const { appState, appDispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(noImage);
  const [imageChanged, setImageChanged] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      title: product ? product.title : "",
      description: product ? product.description : "",
      price: product ? product.price : "",
      category: product ? product.category : 1,
      image: product?.image ? product.image : "",
    },
  });
  useEffect(() => {
    if (type === "edit") {
      if (product.image) {
        setSelectedImage(SERVER_URL + `${product.image}`);
      } else {
        setSelectedImage(noImage);
      }
    }
    if (globalThis.newProduct) {
      setSuccessMessage("New product created successfully");
      globalThis.newProduct = false;
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  }, []);
  const { errors, isSubmitting } = formState;

  const imageField = { ...register("image") };

  function handleImageSelect(e) {
    imageField.onChange(e);
    const file = e.target.files[0];
    if (file) {
      setImageChanged(true);
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  function handleRemoveImage() {
    setSelectedImage(noImage);
    setValue("image", "");
  }

  async function onSubmit(data) {
    setFailMessage("");
    if (data.image?.length && imageChanged) {
      const result = await uploadFile(data.image[0]);
      if (result.success) {
        data.image = result.body.url;
      } else {
        setFailMessage(result.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    if (type === "new") {
      const result = await createProduct(data);
      if (result.success) {
        globalThis.newProduct = true;
        navigate("/admin/products/" + result.body.id, { replace: true });
      } else {
        setFailMessage(result.message);
      }
    } else if (type === "edit") {
      const result = await updateProduct(params.id, data);
      if (result.success) {
        setSuccessMessage("The product updated successfully");
        setImageChanged(false);
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setFailMessage(result.message);
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <form className="ms-3  mt-5 productform" onSubmit={handleSubmit(onSubmit)}>
      {failMessage && (
        <div>
          <h2 className="w-75 bg-white text-danger mb-5 fs-2 py-3 d-flex justify-content-center align-items-center">
            <MdOutlineError className="error me-3" />
            {failMessage}
          </h2>
        </div>
      )}
      {successMessage && (
        <div>
          <h2 className="w-75 bg-white text-success mb-5 fs-3 py-3 px-3  d-flex justify-content-center align-align-items-baseline ">
            <FaCheckCircle className="check me-3" />
            {successMessage}
          </h2>
        </div>
      )}
      <div className="">
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Title of Product</label>
          <input
            type="text"
            className={`w-75 px-2 py-2 rounded-1 form-control ${
              errors.title ? "is-invalid" : ""
            }`}
            {...register("title", {
              required: "You must enter a title of product",
              minLength: {
                value: 3,
                message: "title must be 3 Characters at least",
              },
              maxLength: {
                value: 30,
                message: "title must be 10 Characters at most",
              },
            })}
          />
          {errors.title && (
            <p className="errors mt-3">{errors.title.message}</p>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Description of Product</label>
          <textarea
            type="text"
            className={` w-75 px-2 py-2 rounded-1 ${
              errors.description ? "is-invalid" : ""
            } `}
            rows={10}
            {...register("description", {
              required: "You must enter the description of product",
              minLength: {
                value: 10,
                message: "description of product must be 3 Characters at least",
              },
              maxLength: {
                value: 2000,
                message:
                  "description of product must be 2000 Characters at most",
              },
            })}
          ></textarea>
          {errors.description && (
            <p className="errors mt-3 ">{errors.description.message}</p>
          )}
        </div>
        <div className=" d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Price of Product</label>
          <div className="input-group w-75">
            <span className="input-group-text fs-4 px-3 ">$</span>

            <input
              type="text"
              className="  px-2 py-2  form-control"
              {...register("price", {
                validate(value) {
                  if (isNaN(Number(value))) {
                    return "Please Enter Number";
                  } else if (value < 10 || value > 10000) {
                    return "The Price Should Be Between $10 to $10000";
                  }
                },
              })}
            />
          </div>

          {errors.price && (
            <p className="errors mt-3">{errors.price.message}</p>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
          <label className="mb-1 label fs-3">Category of Product</label>
          <select
            className="inputProducts form-select w-25 px-2 py-2 rounded-1"
            {...register("category", {
              required: "Select the category",
            })}
          >
            {appState.categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="errors mt-3">{errors.category.message}</p>
          )}
        </div>
        <div className="d-flex  flex-column justify-content-center align-items-start mt-5 mb-4">
          <h3 className="mb-1 label fs-3">Image of Product</h3>

          <div className=" d-flex  justify-content-between align-items-center">
            <div className="me-4 d-flex justify-content-center align-items-center flex-column">
              <div>
                <input
                  {...imageField}
                  id="selectImage"
                  className="d-none"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                />
                <label
                  className="btn-select mt-5 mb-4 text-center text-white px-4 py-2 border-0 fs-3"
                  htmlFor="selectImage"
                >
                  Select Image
                </label>
              </div>
              <button
                type="button"
                className="btn-remove text-white px-4 py-2 border-0 fs-3"
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            </div>
            <img src={selectedImage} width={200} height={200} />
          </div>
          {errors.image && (
            <p className="errors mt-3">{errors.image.message}</p>
          )}
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
