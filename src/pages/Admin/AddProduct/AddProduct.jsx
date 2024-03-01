import React, { useEffect } from "react";
import EditForm from "../EditForm/EditForm";

export default function AddProduct() {
  useEffect(() => {
    document.title = "Create New Product";
  }, []);
  return (
    <div>
      <h1>Create New Product</h1>
      <EditForm />
    </div>
  );
}
