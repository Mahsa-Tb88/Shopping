import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { getBlogs } from "../../../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../../components/Share/Pagination/Pagination";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalBlogs, setTotalBlogs] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Blogs";
    const page = searchParams.get("page") || 1;
    setPage(+page);
  }, [searchParams]);

  useEffect(() => {
    const timeout = setTimeout(fetchBlogs, 20);
    return () => clearTimeout(timeout);
  }, [page]);
  let numOfPage = Math.ceil(parseInt(totalBlogs.all) / 4);

  async function fetchBlogs() {
    const result = await getBlogs(page);
    if (result.success) {
      setError(false);
      setBlogs(result.body);
      setTotalBlogs({
        all: result.totalBlogs.all,
        filtered: result.totalBlogs.filtered,
      });
    } else {
      setError({ message: result.error });
    }
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function pageHandler(i) {
    setSearchParams({ page: i });
  }
  return (
    <div className="blog">
      <h1 class="my-5 text-center">Our Blog</h1>

      {isLoading ? (
        <div className="fs-2 w-75 mx-auto text-center loadingBlog">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : error ? (
        <div className="text-center mx-auto w-75">
          <p className="fs-1">{error.message}</p>
          <button
            className="btn-tryAgainBlog fs-3 py-2 px-4"
            onClick={() => fetchBlogs()}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="container">
          {blogs.length ? (
            <div className="row mb-5 ">
              {blogs.map((blog) => {
                return (
                  <Link
                    key={blog.id}
                    className="col-12 col-md-6 col-lg-3 col-blog link"
                    to={`${blog.id}`}
                  >
                    <div class="blog-item ">
                      <div class="blog-item-overlay"></div>
                      <div class="blog-item-container">
                        <div class="blog-item-img">
                          <img
                            src={"http://server.test/" + blog.image}
                            alt={blog.slug}
                          />
                        </div>
                        <div class="blog-item-table">
                          <h3 class="blog-item-title">{blog.title}</h3>
                          <div class="blog-item-info">
                            <span class="blog-item-info-product">
                              {blog.slug}
                            </span>
                            <span class="blog-item-info-dash"></span>
                            <span class="blog-item-info-dr">
                              Dr. Wade Warren
                            </span>
                            <span class="blog-item-info-dash"></span>
                            <span class="blog-item-info-date">
                              Jan 20, 2021
                            </span>
                          </div>
                          <p class="blog-item-desc">{blog.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-center cardEmpty fs-2 ">There is no blog</p>
          )}
          <Pagination
            pageHandler={pageHandler}
            numOfPage={numOfPage}
            page={page}
          />
        </div>
      )}
    </div>
  );
}
