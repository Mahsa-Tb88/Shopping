import React, { useEffect, useState } from "react";
import "./editblog.scss";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../utils/api";
import Loading from "../../../components/Loading/Loading";
import FormBlog from "../FormBlog/FormBlog";

export default function EditBlog() {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    document.title = "Edit Blog";
    const timeOut = setTimeout(fetchBlog, 20);
    return () => clearTimeout(timeOut);
  }, [params]);

  async function fetchBlog() {
    setIsLoading(true);
    const result = await getBlogById(params.id);
    if (result.success) {
      setBlog(result.body);
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
        <div className="edit-blog">
          <h1 className="ms-3  ">Edit Blog</h1>
          <FormBlog type="edit" blog={blog} />
        </div>
      )}
    </div>
  );
}
