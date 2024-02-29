import React, { useEffect, useState } from "react";
import "./products.scss";
import { getProductById, getProducts } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  const { cartState, cartDispatch } = useCartContext();

  async function addToCartHandler(id) {
    if (!cartState.items.find((product) => product.item.id == id)) {
      const result = await getProductById(id);
      if (result.success) {
        cartDispatch({
          type: "addToCart",
          payload: { item: result.body, numOfItem: 1 },
        });
      } else {
      }
    }
  }

  return (
    <div className="row products">
      {products.map((p) => {
        return (
          <div className="col-4 mb-5" key={p.id}>
            <div className="px-3">
              <div className="product border border-1 ">
                <Link to={"/product/" + `${p.id}`}>
                  <img
                    src={"http://server.test" + `${p.image}`}
                    className="card-img-top"
                    alt={p.title}
                  />
                </Link>

                <div className="card-body">
                  <h5 className="fs-3 py-5 text-center">{p.title}</h5>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2">
                    <h3>Price: </h3>
                    <p className="fs-4">$ {p.price}</p>
                  </div>

                  <div
                    className="btnAddToCart fs-4"
                    onClick={() => addToCartHandler(p.id)}
                  >
                    {cartState.items.find(
                      (ProductItem) => ProductItem.item.id == p.id
                    ) ? (
                      <AddtoCart productId={p.id} />
                    ) : (
                      <button className="bg-addTocart py-3 ">
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

function AddtoCart({ productId }) {
  const { cartState, cartDispatch } = useCartContext();
  const selectedItem = cartState.items.find(
    (product) => product.item.id == productId
  );

  function removeItem(id) {
    const filterItems = cartState.items.filter(
      (product) => product.item.id != id
    );
    cartDispatch({ type: "setItems", payload: filterItems });
  }

  function decNumOfItem(id) {
    const findIndex = cartState.items.findIndex(
      (product) => product.item.id == id
    );
    const newfilterShoppingCart = { ...cartState.items[findIndex] };
    if (newfilterShoppingCart.numOfItem > 1) {
      newfilterShoppingCart.numOfItem--;
      const newShoppingCart = [...cartState.items];
      newShoppingCart[findIndex] = newfilterShoppingCart;
      cartDispatch({ type: "setItems", payload: newShoppingCart });
    } else {
      const filterItems = cartState.items.filter(
        (product) => product.item.id != id
      );
      cartDispatch({ type: "setItems", payload: filterItems });
    }
  }

  function incNumOfItem(id) {
    const findIndex = cartState.items.findIndex(
      (product) => product.item.id == id
    );
    const newfilterShoppingCart = { ...cartState.items[findIndex] };
    newfilterShoppingCart.numOfItem++;
    const newShoppingCart = [...cartState.items];
    newShoppingCart[findIndex] = newfilterShoppingCart;
    cartDispatch({ type: "setItems", payload: newShoppingCart });
  }
  return (
    <div className="px-2 py-3 d-flex justify-content-between align-items-center mt-auto btn-add">
      <div
        className="btn-trash d-flex justify-content-center align-items-center"
        onClick={() => removeItem(productId)}
      >
        <FaRegTrashAlt />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <span className="btn-minus" onClick={() => decNumOfItem(productId)}>
          <FaMinus />
        </span>
        <span className="text-black mx-3">{selectedItem.numOfItem}</span>
        <span className="btn-plus" onClick={() => incNumOfItem(productId)}>
          <FaPlus />
        </span>
      </div>
    </div>
  );
}
