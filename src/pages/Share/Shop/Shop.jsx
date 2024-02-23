import React, { useEffect, useReducer, useState } from "react";
import "./shop.scss";
import Filter from "../../../components/Share/Filter/Filter";
import Pagination from "../../../components/Share/Pagination/Pagination";
import Products from "../../../components/Share/Products/Products";
import { getProducts } from "../../../utils/api";
import shopReducer from "./shopReducer";
export default function Shop() {
  const [shopState, shopDispatch] = useReducer(shopReducer, {
    products: [],
    totalProducts: { all: 0, filtered: 0 },
    limit: 6,
    page: 1,
  });
  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(timeOut);
  }, [shopState.limit]);

  async function fetchProducts() {
    const result = await getProducts(1, 8);
    if (result.success) {
      shopDispatch({ type: "setProducts", payload: result.body });
      shopDispatch({ type: "setTotalProducts", payload: result.totalProducts });
    } else {
    }
  }
  const numOfPage = Math.ceil(
    shopState.totalProducts.filtered / shopState.limit
  );
  return (
    <div className="shop    container ">
      <div className="d-flex justify-content-between align-items-start mb-5">
        <div className="filter px-3 py-3 w-25 me-2 mt-5">
          <Filter />
        </div>
        <div className="products w-75 ms-2 mt-5">
          <Products products={shopState.products} />
        </div>
      </div>
      <div className="text-center mt-5">
        <Pagination numOfPage={numOfPage} page={shopState.page} />
      </div>
    </div>
  );
}
