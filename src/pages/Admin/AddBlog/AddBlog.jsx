import React, { useEffect } from "react";
import FormBlog from "../FormBlog/FormBlog";
import { Helmet } from "react-helmet";
export default function AddBlog() {
  return (
    <div className="addProduct px-2 px-md-4 py-5">
      <Helmet>New Blog</Helmet>
      <h1>Create New Blog</h1>
      <FormBlog type="new" />
    </div>
  );
}
