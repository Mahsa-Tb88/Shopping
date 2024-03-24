import React, { useEffect } from "react";
import "./addblog.scss";
import FormBlog from "../FormBlog/FormBlog";
export default function AddBlog() {
  useEffect(() => {
    document.title = "New Blog";
  }, []);

  return (
    <div className="addProduct">
      <h1>Create New Blog</h1>
      <FormBlog type="new" />
    </div>
  );
}
