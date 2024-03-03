import React, { useEffect } from "react";
import EditForm from "../EditForm/EditForm";
import "./addProduct.scss";
import { createProduct } from "../../../utils/api";
export default function AddProduct() {
  useEffect(() => {
    document.title = "Create New Product";
  }, []);
  async function submitHandler(data) {
    console.log(data);
    const result = await createProduct(data);
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <div className="addProduct">
      <h1>Create New Product</h1>
      <EditForm type="new" onSubmit={submitHandler} />
    </div>
  );
}
