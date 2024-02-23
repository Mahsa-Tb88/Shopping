import React from "react";
import "./pagination.scss";
import { GrFormNext } from "react-icons/gr";
import { MdNavigateBefore } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Pagination({ numOfPage, page }) {
  let pages = [];
  for (let i = 1; i <= numOfPage; i++) {
    pages.push(
      <NavLink key={i} className={"page-link "} end>
        <span className="page-Item">{i}</span>
      </NavLink>
    );
  }

  return (
    <nav className=" d-flex justify-content-center align-items-center paginate pagination">
      <NavLink className="page-link">
        <span className="page-Item">
          <MdNavigateBefore />
        </span>
      </NavLink>
      {pages}
      <NavLink className="page-link">
        <span className="page-Item">
          <GrFormNext />
        </span>
      </NavLink>
    </nav>
  );
}
