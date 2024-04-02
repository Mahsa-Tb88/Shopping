import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../utils/api";
import ProductForm from "../ProductForm/ProductForm";

export default function EditProduct() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    document.title = "Edit Product";
    const timeOut = setTimeout(fetchProduct, 20);
    return () => clearTimeout(timeOut);
  }, [params]);

  async function fetchProduct() {
    setIsLoading(true);
    const result = await getProductById(params.id);
    if (result.success) {
      setProduct(result.body);
      setIsLoading(false);
    } else {
      setError(true);
    }
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="edit-product px-2 px-md-4 py-5">
          <h1 className="ms-md-3  title-editProduct">Edit Product</h1>
          <ProductForm type="edit" product={product} />
        </div>
      )}
    </div>
  );
}
