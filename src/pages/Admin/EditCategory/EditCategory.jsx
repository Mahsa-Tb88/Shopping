import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import FormCategory from "../FormCategory/FormCategory";
import { useParams } from "react-router-dom";
import { getCategoryById, updateCategory } from "../../../utils/api";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function EditCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState({});
  const [failMessage, setFailMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(fetchCategory, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function fetchCategory() {
    const result = await getCategoryById(id);
    if (result.success) {
      setError(false);
      setCategory(result.body);
    } else {
      setError(result.message);
    }
    setIsLoading(false);
  }

  async function submitHandler(data) {
    const result = await updateCategory(data, id);
    if (result.success) {
      setFailMessage(false);
      setSuccessMessage("The category updated successfully");
      setTimeout(() => {
        navigate("/admin/categories");
      }, 2000);
    } else {
      setFailMessage(result.message);
    }
  }
  return (
    <div className="editCategory px-2 px-md-4 py-5">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div>
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
          <Helmet>
            <title>Edit Category</title>
          </Helmet>
          <h1>Edit Category</h1>
          <FormCategory
            type="edit"
            onSubmit={submitHandler}
            category={category}
          />
        </div>
      )}
    </div>
  );
}
