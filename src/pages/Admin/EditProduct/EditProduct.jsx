import React, { useEffect, useState } from "react";
import "./editproduct.scss";
import EditForm from "../EditForm/EditForm";
import Loading from "../../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../utils/api";

export default function EditProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    document.title = "Edit Product";
    const timeOut = setTimeout(fetchProduct, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function fetchProduct() {
    const result = await getProductById(id);
    if (result.success) {
      setProduct(result.body);
      setLoading(false);
    } else {
      setError(true);
    }
  }

  function submitHandler(data) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="edit-product">
          <h1 className="ms-3  title-editProduct">Edit Product</h1>
          <EditForm type="edit" onSubmit={submitHandler} product={product} />
        </div>
      )}
    </div>
  );
}
