import React, { useEffect } from "react";
import ProductForm from "../ProductForm/ProductForm";
export default function AddProduct() {
  useEffect(() => {
    document.title = "New Product";
  }, []);

  return (
    <div className="addProduct px-2 px-md-4 py-5 ">
      <h1>Create New Product</h1>
      <ProductForm type="new" />
    </div>
  );
}
