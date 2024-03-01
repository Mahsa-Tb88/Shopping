import React, { useEffect, useState } from "react";
import "./filter.scss";
import { useAppContext } from "../../../context/AppContext";
import { useSearchParams } from "react-router-dom";

export default function Filter({ shopDispatch }) {
  const { appState, appDispatch } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams("");

  function categoryHandler(value) {
    shopDispatch({ type: "setfilterCategory", payload: value });
    let paramsUrl = {};
    paramsUrl.category = value;
    paramsUrl.page = 1;
    if (searchParams.get("limit")) {
      paramsUrl.limit = searchParams.get("limit");
    }

    if (searchParams.get("q")) {
      paramsUrl.q = searchParams.get("q");
    }
    if (searchParams.get("sort")) {
      paramsUrl.sort = searchParams.get("sort");
    }
    if (searchParams.get("order")) {
      paramsUrl.order = searchParams.get("order");
    }

    setSearchParams(paramsUrl);
  }
  function limitHandler(value) {
    shopDispatch({ type: "setLimit", payload: value });
    let paramsUrl = {};
    paramsUrl.limit = value;
    paramsUrl.page = 1;
    if (searchParams.get("category")) {
      paramsUrl.category = searchParams.get("category");
    }
    if (searchParams.get("q")) {
      paramsUrl.q = searchParams.get("q");
    }
    if (searchParams.get("sort")) {
      paramsUrl.sort = searchParams.get("sort");
    }
    if (searchParams.get("order")) {
      paramsUrl.order = searchParams.get("order");
    }
    setSearchParams(paramsUrl);
  }
  function sortHandler(value) {
    let lastSort =
      value == "new"
        ? { sort: "id", order: "desc" }
        : value == "old"
        ? { sort: "id", order: "asc" }
        : value == "cheapest"
        ? { sort: "price", order: "asc" }
        : { sort: "price", order: "desc" };

    shopDispatch({ type: "setSortAndOrder", payload: lastSort });
    let paramsUrl = {};
    paramsUrl.sort = lastSort.sort;
    paramsUrl.order = lastSort.order;
    paramsUrl.page = 1;

    if (searchParams.get("category")) {
      paramsUrl.category = searchParams.get("category");
    }
    if (searchParams.get("q")) {
      paramsUrl.q = searchParams.get("q");
    }
    if (searchParams.get("limit")) {
      paramsUrl.limit = searchParams.get("limit");
    }

    setSearchParams(paramsUrl);
  }
  function searchHandler(value) {
    // const timeout = setTimeout(searchFilter, 1000);
    // clearTimeout(timeout);

    // function searchFilter() {
    //   shopDispatch({ type: "setSearch", payload: value });
    // }
    shopDispatch({ type: "setSearch", payload: value });

    let paramsUrl = {};
    paramsUrl.q = value;
    paramsUrl.page = 1;
    if (searchParams.get("limit")) {
      paramsUrl.limit = searchParams.get("limit");
    }
    if (searchParams.get("category")) {
      paramsUrl.category = searchParams.get("category");
    }
    if (searchParams.get("sort")) {
      paramsUrl.sort = searchParams.get("sort");
    }
    if (searchParams.get("order")) {
      paramsUrl.order = searchParams.get("order");
    }

    setSearchParams(paramsUrl);
  }
  return (
    <div className="filter">
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Search</label>
        <input
          type="text"
          placeholder="search..."
          className="w-100 px-3 py-2 fs-4"
          onChange={(e) => searchHandler(e.target.value)}
          value={searchParams.get("q") || ""}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Categories</label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          onChange={(e) => categoryHandler(e.target.value)}
          value={searchParams.get("category") || ""}
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
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">sort</label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          value={
            searchParams.get("sort") == "price" &&
            searchParams.get("order") == "desc"
              ? "expensive"
              : searchParams.get("sort") == "price" &&
                searchParams.get("order") == "asc"
              ? "cheapest"
              : searchParams.get("sort") == "id" &&
                searchParams.get("order") == "asc"
              ? "old"
              : "new"
          }
          onChange={(e) => sortHandler(e.target.value)}
        >
          <option value="cheapest">Cheapest</option>
          <option value="expensive">The most expensive</option>
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
        </select>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">
          Num Of Product In Each Page
        </label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          value={searchParams.get("limit") || 6}
          onChange={(e) => limitHandler(e.target.value)}
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}
