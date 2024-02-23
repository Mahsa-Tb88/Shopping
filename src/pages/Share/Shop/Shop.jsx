import React, { useEffect, useReducer, useState } from "react";
import "./shop.scss";
import Filter from "../../../components/Share/Filter/Filter";
import Pagination from "../../../components/Share/Pagination/Pagination";
import Products from "../../../components/Share/Products/Products";
import { getProducts } from "../../../utils/api";
import shopReducer from "./shopReducer";
import { useSearchParams } from "react-router-dom";
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [shopState, shopDispatch] = useReducer(shopReducer, {
    products: [],
    totalProducts: { all: 0, filtered: 0 },
    limit: 6,
    page: searchParams.get("page") || 1,
    isLoading: true,
    loadingError: false,
  });

  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(timeOut);
  }, [shopState.limit, shopState.page]);

  async function fetchProducts() {
    const result = await getProducts(
      searchParams.get("page") || shopState.page,
      shopState.limit
    );
    if (result.success) {
      shopDispatch({ type: "setProducts", payload: result.body });
      shopDispatch({ type: "setTotalProducts", payload: result.totalProducts });
    } else {
    }
    shopDispatch({ type: "setIsLoading", payload: false });
  }
  const numOfPage = Math.ceil(
    shopState.totalProducts.filtered / shopState.limit
  );

  return (
    <div className="shop container ">
      <div className="d-flex justify-content-between align-items-start mb-5">
        <div className="filter px-3 py-3 w-25 me-2 mt-5">
          <Filter />
        </div>
        <div className="w-75 ms-2 mt-5">
          {shopState.isLoading ? (
            <div className=" d-flex justify-content-center align-items-center  mt-5  flex-column">
              <p className="mb-4 loadingProducts">Loading ...</p>
              <span className=" spiner spinner-grow fs-5 "></span>
            </div>
          ) : (
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className="products ">
                <Products products={shopState.products} />
              </div>
              <div className="text-center mt-5">
                <Pagination
                  numOfPage={numOfPage}
                  page={shopState.page}
                  shopDispatch={shopDispatch}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
