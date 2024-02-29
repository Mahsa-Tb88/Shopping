import React from "react";
import "./cart.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
export default function Cart() {
  const { cartState, cartDispatch } = useCartContext();

  let totalPrice = 0;
  cartState.items.forEach((element) => {
    totalPrice = element.item.price * element.numOfItem + totalPrice;
  });

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
    <div className="cart container">
      <h1 className="my-5 text-center">Shopping Card</h1>
      {cartState.items.length ? (
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr className="table-row">
              <th scope="col" className="fs-3">
                Row
              </th>
              <th scope="col" className="fs-3">
                Title
              </th>
              <th scope="col" className="fs-3">
                Number Of Item
              </th>
              <th scope="col" className="fs-3">
                Price
              </th>
              <th scope="col" className="fs-3">
                Total Price
              </th>
              <th scope="col" className="fs-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cartState.items.map((p, i) => {
              return (
                <tr key={p.item.id} className="table-row">
                  <th scope="row" className="fs-5">
                    {i + 1}
                  </th>

                  <td>
                    <Link
                      className="link fs-4 px-2"
                      to={"/product/" + `${p.item.id}`}
                    >
                      {p.item.title}
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex justify-content-around align-items-center">
                      <span
                        className="btn-minuCart"
                        onClick={() => decNumOfItem(p.item.id)}
                      >
                        <FaMinus />
                      </span>
                      <span className="text-black fs-4 ">{p.numOfItem}</span>
                      <span
                        className="btn-plusCart"
                        onClick={() => incNumOfItem(p.item.id)}
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </td>
                  <td className="fs-4">$ {p.item.price}</td>
                  <td className="fs-4">${p.item.price * p.numOfItem}</td>
                  <td>
                    <div
                      className="btn-trashCart d-flex justify-content-center align-items-center"
                      onClick={() => removeItem(p.item.id)}
                    >
                      <FaRegTrashAlt />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className=" fw-bold fs-3">
                Total Price
              </td>
              <td className=" fw-bold fs-3">$ {totalPrice}</td>
              <td colSpan="4"></td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="text-center cardEmpty fs-2">Your card is empty</p>
      )}
    </div>
  );
}

// <Link className="link" to={"/product/" + `${p.product.id}`}>
// {p.product.title}
// </Link>
