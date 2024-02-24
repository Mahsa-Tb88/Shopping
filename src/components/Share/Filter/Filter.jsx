import React, { useEffect, useState } from "react";
import "./filter.scss";
import { useAppContext } from "../../../context/AppContext";
import { useSearchParams } from "react-router-dom";

export default function Filter({ shopDispatch }) {
  const { appState, appDispatch } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams("");
  function categoryHandler(value) {
    console.log("value", value);
    shopDispatch({ type: "setfilterCategory", payload: value });
    setSearchParams({ category: value });
  }
  return (
    <div className="filter">
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Search</label>
        <input
          type="text"
          placeholder="search..."
          className="w-100 px-3 py-2 fs-4"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">Categories</label>
        <select
          className="w-100 px-2 border-0 py-2 fs-4"
          onChange={(e) => categoryHandler(e.target.value)}
          value={searchParams.get("category") || "all"}
        >
          <option value="all">All</option>
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
        <select className="w-100 px-2 border-0 py-2 fs-4">
          <option>Cheapest</option>
          <option>The most expensive</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-baseline mb-5">
        <label className="text-white fs-3 mb-2">
          Num Of Product In Each Page
        </label>
        <select className="w-100 px-2 border-0 py-2 fs-4">
          <option>6</option>
          <option>9</option>
          <option>12</option>
          <option>24</option>
        </select>
      </div>
    </div>
  );
}
