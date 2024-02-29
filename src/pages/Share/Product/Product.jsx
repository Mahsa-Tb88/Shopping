import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import { useCartContext } from "../../../context/CartContext";
import { getProductById } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const productId = params.id;
  const { cartState, cartDispatch } = useCartContext();
  const cartProduct = cartState.items.find(
    (product) => product.item.id == productId
  );

  useEffect(() => {
    const timeOut = setTimeout(fetchProdut, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function fetchProdut() {
    const result = await getProductById(productId);
    console.log(result);
    if (result.success) {
      setSelectedProduct(result.body);
    } else {
    }
    setIsLoading(false);
  }

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

  function addToCartHandlet(id) {
    cartDispatch({
      type: "addToCart",
      payload: { item: selectedProduct, numOfItem: 1 },
    });
  }

  return (
    <div className="productPage">
      {isLoading ? (
        <div className="text-center">
          <p className="loading fs-3">Loading ... </p>
          <p className="spinner spinner-grow fs-3"></p>
        </div>
      ) : (
        <div>
          <h1 className="text-center  titleProduct">{selectedProduct.title}</h1>
          <div className="row text-center d-flex align-items-center">
            <div className="col-6 text-center overflow-hidden">
              <img src={"http://server.test/" + selectedProduct.image} />
            </div>
            <div className="col-6">
              <div className="mb-5 ">
                <span className="fs-2 me-5">Price:</span>
                <span className="fs-2">${selectedProduct.price}</span>
              </div>
              {cartProduct ? (
                <div className="mt-5 d-flex justify-content-around align-items-center">
                  <div className="d-flex justify-content-around align-items-center">
                    <span
                      className="btn-minusProduct"
                      onClick={() => decNumOfItem(cartProduct.item.id)}
                    >
                      <FaMinus />
                    </span>
                    <span className="text-black mx-5 fs-4 ">
                      {cartProduct.numOfItem}
                    </span>
                    <span
                      className="btn-plusProduct"
                      onClick={() => incNumOfItem(cartProduct.item.id)}
                    >
                      <FaPlus />
                    </span>
                  </div>
                  <div
                    className="btn-trashProduct d-flex justify-content-center align-items-center"
                    onClick={() => removeItem(cartProduct.item.id)}
                  >
                    <FaRegTrashAlt />
                  </div>
                </div>
              ) : (
                <button
                  className="btnAddToCartProduct text-white fs-4"
                  onClick={() => addToCartHandlet(selectedProduct.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
          <p className="text-left mt-5 fs-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )}
    </div>
  );
}
