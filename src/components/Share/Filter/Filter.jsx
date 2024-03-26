import React, { useEffect, useState } from "react";
import "./filter.scss";
import { useAppContext } from "../../../context/AppContext";
import { useSearchParams } from "react-router-dom";

export default function Filter({ shopState }) {
  const { appState, appDispatch } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams("");

  function searchHandler(value) {
    let params = getNewSearchParams(searchParams, "q", value);
    params = getNewSearchParams(params, "page", 0);
    setSearchParams(params, { replace: true });
  }
  function categoryHandler(value) {
    let params = getNewSearchParams(searchParams, "category", value);
    params = getNewSearchParams(params, "page", 0);
    setSearchParams(params);
  }
  function sortHandler(type) {
    const s = { sort: "id", order: "desc" };
    if (type === "2") {
      s.order = "asc";
    } else if (type === "3") {
      s.sort = "price";
    } else if (type === "4") {
      s.sort = "price";
      s.order = "asc";
    }

    let params = getNewSearchParams(searchParams, "sort", s.sort);
    params = getNewSearchParams(params, "order", s.order);

    if (s.sort == "id" && s.order == "desc") {
      delete params.order;
      delete params.sort;
    }
    delete params.page;
    setSearchParams(params);
  }
  function getSortType() {
    if (shopState.sort === "id" && shopState.order === "desc") {
      return "1";
    } else if (shopState.sort === "id" && shopState.order === "asc") {
      return "2";
    } else if (shopState.sort === "price" && shopState.order === "desc") {
      return "3";
    } else if (shopState.sort === "price" && shopState.order === "asc") {
      return "4";
    }
  }
  function limitHandler(value) {
    let params = getNewSearchParams(searchParams, "limit", value);
    params = getNewSearchParams(params, "page", 0);
    setSearchParams(params);
  }

  return (
    <div className="filter  row">
      <div className="d-flex col-6 col-md-12 flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Search</label>
        <input
          type="text"
          placeholder="search..."
          className="w-100 px-3 py-2 fs-4"
          onChange={(e) => searchHandler(e.target.value)}
          value={shopState.q}
        />
      </div>
      <div className="d-flex col-6 col-md-12 flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Categories</label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          onChange={(e) => categoryHandler(e.target.value)}
          value={shopState.category}
        >
          <option value="">All</option>
          {appState.categories.map((c) => {
            return (
              <option key={c.id} value={c.slug}>
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="d-flex col-6 col-md-12 flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">sort</label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          value={getSortType()}
          onChange={(e) => sortHandler(e.target.value)}
        >
          <option value="1">Newest</option>
          <option value="2">Oldest</option>
          <option value="3">The most expensive</option>
          <option value="4">Cheapest</option>
        </select>
      </div>
      <div className="d-flex col-6 col-md-12 flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">
          Number Of Product 
        </label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          value={shopState.limit}
          onChange={(e) => limitHandler(e.target.value)}
        >
          <option value="">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}
