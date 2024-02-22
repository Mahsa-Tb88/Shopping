import React, { useEffect, useState } from "react";
import "./filter.scss";
import { getAllCategories } from "../../../utils/api";

export default function Filter() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const timeOut = setTimeout(fetchCategories, 20);
    return () => clearTimeout(timeOut);
  }, []);
  async function fetchCategories() {
    const result = await getAllCategories();
    if (result.success) {
      setCategories(result.body);
    } else {
    }
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
        <select className="w-100 px-2 border-0 py-2 fs-4">
          <option>All</option>
          {categories.map((c) => {
            return <option key={c.id}>{c.slug}</option>;
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
