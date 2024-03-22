import React, { useEffect } from "react";
import "./addProduct.scss";
import { createProduct } from "../../../utils/api";
import ProductForm from "../ProductForm/ProductForm";
export default function AddProduct() {
  useEffect(() => {
    document.title = "New Product";
  }, []);

  return (
    <div className="addProduct">
      <h1>Create New Product</h1>
      <ProductForm type="new" />
    </div>
  );
}
