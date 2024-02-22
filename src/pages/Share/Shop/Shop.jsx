import React, { useEffect, useState } from "react";
import "./shop.scss";
import Filter from "../../../components/Share/Filter/Filter";
import Pagination from "../../../components/Share/Pagination/Pagination";
import Products from "../../../components/Share/Products/Products";
export default function Shop() {
  return (
    <div className="shop    container ">
      <div className="d-flex justify-content-between align-items-baseline mb-5">
        <div className="filter px-3 py-3 w-25 me-2 mt-5">
          <Filter />
        </div>
        <div className="products w-75 ms-2 mt-5">
          <Products />
        </div>
      </div>
      <div className="text-center mt-5">
        <Pagination />
      </div>
    </div>
  );
}
