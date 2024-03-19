import React, { useState } from "react";
import "./pagination.scss";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
export default function Pagination({ numOfPage, page, pageHandler }) {
  let pages = [];
  const prevClasses = ["page-link", page == 1 ? "disabled" : ""].join(" ");
  const nextClasses = ["page-link", page == numOfPage ? "disabled" : ""].join(
    " "
  );
  function pageFirstHandler() {
    pageHandler(1);
  }
  function pageLastHandler() {
    pageHandler(numOfPage);
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

  if (numOfPage <= 1) {
    return;
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
