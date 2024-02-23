import React, { useState } from "react";
import "./pagination.scss";
import { GrFormNext } from "react-icons/gr";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
export default function Pagination({ numOfPage, page, shopDispatch }) {
  const [searchParams, setSearchParams] = useSearchParams("");
  let pages = [];
  const prevClasses = ["page-link", page == 1 ? "disabled" : ""].join(" ");
  const nextClasses = ["page-link", page == numOfPage ? "disabled" : ""].join(
    " "
  );
  function pageHandler(i) {
    setSearchParams({ page: i });
    shopDispatch({ type: "setPage", payload: parseInt(i) });
  }
  function pageFirstHandler() {
    setSearchParams({ page: 1 });
    shopDispatch({ type: "setPage", payload: parseInt(1) });
  }
  function pageLastHandler() {
    setSearchParams({ page: numOfPage });

    shopDispatch({ type: "setPage", payload: parseInt(numOfPage) });
  }

  for (let i = 1; i <= numOfPage; i++) {
    pages.push(
      <i
        key={i}
        className={"page-link " + (page == i ? "active" : "")}
        onClick={() => pageHandler(i)}
      >
        <span className="page-Item">{i}</span>
      </i>
    );
  }

  return (
    <nav className=" d-flex justify-content-center align-items-center paginate pagination">
      <ul className="d-flex justify-content-center align-items-center">
        <i className={prevClasses} onClick={() => pageFirstHandler()}>
          <span className="page-Item">
            <FaAngleDoubleLeft />
          </span>
        </i>
        {pages}
        <i className={nextClasses} onClick={() => pageLastHandler()}>
          <span className="page-Item">
            <FaAngleDoubleRight />
          </span>
        </i>
      </ul>
    </nav>
  );
}
