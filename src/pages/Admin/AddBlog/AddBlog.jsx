import React, { useEffect } from "react";
import FormBlog from "../FormBlog/FormBlog";
export default function AddBlog() {
  useEffect(() => {
    document.title = "New Blog";
  }, []);

  return (
    <div className="addProduct px-2 px-md-4 py-5">
      <h1>Create New Blog</h1>
      <FormBlog type="new" />
    </div>
  );
}
