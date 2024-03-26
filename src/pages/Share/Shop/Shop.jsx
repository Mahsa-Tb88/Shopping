import React, { useEffect, useReducer, useState } from "react";
import "./shop.scss";
import Filter from "../../../components/Share/Filter/Filter";
import Pagination from "../../../components/Share/Pagination/Pagination";
import Products from "../../../components/Share/Products/Products";
import { getProducts } from "../../../utils/api";
import shopReducer from "./shopReducer";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [shopState, shopDispatch] = useReducer(shopReducer, {
    products: [],
    totalProducts: { all: 0, filtered: 0 },
    limit: searchParams.get("limit") || 6,
    category: searchParams.get("category") || "",
    page: searchParams.get("page") || 1,
    sort: searchParams.get("sort") || "Newest",
    q: searchParams.get("q") || "",
    order: searchParams.get("order") || "desc",
    delay: 10,
  });

  useEffect(() => {
    document.title = "Prodcuts";
    const page = searchParams.get("page") || 1;
    const q = searchParams.get("q") || "";
    const limit = searchParams.get("limit") || 6;
    const category = searchParams.get("category") || "";
    const order = searchParams.get("order") || "desc";
    const sort = searchParams.get("sort") || "id";
    shopDispatch({
      type: "setFilter",
      payload: {
        page,
        q,
        limit,
        category,
        order,
        sort,
      },
    });
    if (shopState.q !== q) {
      shopDispatch({ type: "setDelay", payload: 1000 });
    }
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, shopState.delay);

    return () => clearTimeout(timeOut);
  }, [
    shopState.limit,
    shopState.page,
    shopState.category,
    shopState.q,
    shopState.sort,
    shopState.order,
  ]);

  async function fetchProducts() {
    setLoading(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);
    const result = await getProducts(
      shopState.page,
      shopState.limit,
      shopState.category,
      shopState.q,
      shopState.sort,
      shopState.order
    );
    if (result.success) {
      setLoadingError(false);
      shopDispatch({ type: "setProducts", payload: result.body });
      shopDispatch({ type: "setTotalProducts", payload: result.totalProducts });
    } else {
      setLoadingError({ message: result.message });
    }
    setLoading(false);
  }
  const numOfPage = Math.ceil(
    shopState.totalProducts.filtered / shopState.limit
  );

  function pageHandler(i) {
    setSearchParams({ page: i });
  }

  return (
    <div className="shop container ">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-5">
        <div className="filter px-3 py-3 w-md-25 me-2 mt-5">
          <Filter shopState={shopState} />
        </div>
        <div className="w-md-75 ms-2 mt-5">
          {loading ? (
            <div className=" d-flex justify-content-center align-items-center  mt-5  flex-column">
              <p className="mb-4 loadingProducts">Loading ...</p>
              <span className=" spiner spinner-grow fs-5 "></span>
            </div>
          ) : loadingError ? (
            <div className="d-flex justify-content-center align-items-center  mt-5  flex-column">
              <h1>{loadingError.message}</h1>
              <button
                className="btn btn-danger px-4 py-3 fs-4"
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
                  page={searchParams.get("page")}
                  pageHandler={pageHandler}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
