import React, { useEffect, useState } from "react";
import "./products.scss";
import { getProducts } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
export default function Products({products,setProducts}) {

  return (
    <div className="row products">
      {products.map((p) => {
        return (
          <div className="col-4 mb-5" key={p.id}>
            <div className="px-3">
              <div className="product border border-1 ">
                <img
                  src={"http://server.test" + `${p.image}`}
                  className="card-img-top"
                  alt={p.title}
                />
                <div className="card-body">
                  <h5 className="fs-3 py-5 text-center">{p.title}</h5>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2">
                    <h3>Price: </h3>
                    <p className="fs-4">$ {p.price}</p>
                  </div>

                  <button className="btnAddToCart py-3 fs-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
