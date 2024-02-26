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
    limit: searchParams.get("limit") || 6,
    filterCategory: searchParams.get("category") || "",
    page: searchParams.get("page") || 1,
    sort: searchParams.get("sort") || "Newest",
    q: searchParams.get("q") || "",
    order: searchParams.get("order") || "desc",
    isLoading: true,
    loadingError: false,
  });

  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(timeOut);
  }, [
    shopState.limit,
    shopState.page,
    shopState.filterCategory,
    shopState.q,
    shopState.sort,
    shopState.order,
  ]);

  async function fetchProducts() {
    shopDispatch({ type: "setLoadingError", payload: false });
    // shopDispatch({ type: "setIsLoading", payload: true });
    const result = await getProducts(
      shopState.page,
      shopState.limit,
      shopState.filterCategory,
      shopState.q,
      shopState.sort,
      shopState.order
    );
    if (result.success) {
      shopDispatch({ type: "setProducts", payload: result.body });
      shopDispatch({ type: "setTotalProducts", payload: result.totalProducts });
    } else {
      shopDispatch({
        type: "setLoadingError",
        payload: { code: result.code, message: result.message },
      });
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
          <Filter shopDispatch={shopDispatch} />
        </div>
        <div className="w-75 ms-2 mt-5">
          {shopState.isLoading ? (
            <div className=" d-flex justify-content-center align-items-center  mt-5  flex-column">
              <p className="mb-4 loadingProducts">Loading ...</p>
              <span className=" spiner spinner-grow fs-5 "></span>
            </div>
          ) : shopState.loadingError ? (
            <div className="d-flex justify-content-center align-items-center  mt-5  flex-column">
              <h1>{shopState.loadingError.message}</h1>
              <button
                className="btn btn-danger"
                onClick={() => fetchProducts()}
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className="products ">
                {!shopState.totalProducts.filtered ? (
                  <div className="fs-1 text-center">
                    <p className="mb-5">
                      Sorry, currently, we do not have any products matching
                      your search.
                    </p>
                    <p>Please check back later!</p>
                  </div>
                ) : (
                  <Products products={shopState.products} />
                )}
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
