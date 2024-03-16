import React, { useEffect, useState } from "react";
import "./products.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  
  const { cartState, cartDispatch } = useCartContext();

  function incrementHandler(product) {
    cartDispatch({ type: "incrementItem", payload: product });
  }

  let selectedItem;

  return (
    <div className="row products">
      {products.map((p) => {
        selectedItem = cartState.items.find((item) => item.id == p.id);
        return (
          <div className="col-4 mb-5" key={p.id}>
            <div className="px-3 h-100">
              <div className="product border border-1 d-flex flex-column  ">
                <Link to={"/product/" + `${p.id}`}>
                  <img
                    src={"http://server.test" + `${p.image}`}
                    className="card-img-top"
                    alt={p.title}
                  />
                </Link>
                <div className="card-body">
                  <h1 className="fs-3 py-5 text-center cardItem-titel">
                    <Link
                      to={"/product/" + `${p.id}`}
                      className="link text-black"
                    >
                      {p.title}
                    </Link>
                  </h1>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2">
                    <h3>Price: </h3>
                    <p className="fs-4">$ {p.price}</p>
                  </div>
                  <div className="btnAddToCart fs-4">
                    {selectedItem ? (
                      <AddtoCart product={selectedItem} />
                    ) : (
                      <button
                        className="bg-addTocart py-3 "
                        onClick={() => incrementHandler(p)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AddtoCart({ product }) {
  const { cartDispatch } = useCartContext();

  function incrementHandler(product) {
    cartDispatch({ type: "incrementItem", payload: product });
  }
  function decrementHandler(product) {
    cartDispatch({ type: "decrementItem", payload: product });
  }
  function deleteHandler(product) {
    cartDispatch({ type: "deleteItem", payload: product });
  }
  return (
    <div className="px-2 py-3 d-flex justify-content-between align-items-center mt-auto btn-add">
      <div
        className="btn-trash d-flex justify-content-center align-items-center"
        onClick={() => deleteHandler(product)}
      >
        <FaRegTrashAlt />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <span className="btn-minus" onClick={() => decrementHandler(product)}>
          <FaMinus />
        </span>
        <span className="text-black mx-3">{product.count}</span>
        <span className="btn-plus" onClick={() => incrementHandler(product)}>
          <FaPlus />
        </span>
      </div>
    </div>
  );
}
