import React, { useEffect } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { Helmet } from "react-helmet";
export default function AddProduct() {
  return (
    <div className="addProduct px-2 px-md-4 py-5 ">
      <Helmet>
        <title>New Product</title>
      </Helmet>
      <h1>Create New Product</h1>
      <ProductForm type="new" />
    </div>
  );
}
