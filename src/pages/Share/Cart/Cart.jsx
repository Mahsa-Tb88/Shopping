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
    totalPrice = element.price * element.count + totalPrice;
  });

  function removeItem(product) {
    cartDispatch({ type: "deleteItem", payload: product });
  }

  function decNumOfItem(product) {
    cartDispatch({ type: "decrementItem", payload: product });
  }

  function incNumOfItem(product) {
    cartDispatch({ type: "incrementItem", payload: product });
  }

  return (
    <div className="cart vh-100 px-2 px-md-0">
      <h1 className="my-5 text-center">Shopping Card</h1>
      {cartState.items.length ? (
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr className="table-row">
              <th scope="col">Row</th>
              <th scope="col">Title</th>
              <th scope="col">Number Of Item</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartState.items.map((p, i) => {
              return (
                <tr key={p.id} className="table-row">
                  <th scope="row">{i + 1}</th>

                  <td>
                    <Link className="linkcart" to={"/product/" + `${p.id}`}>
                      {p.title}
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex justify-content-around align-items-center">
                      <span
                        className="btn-minuCart"
                        onClick={() => decNumOfItem(p)}
                      >
                        <FaMinus />
                      </span>
                      <span className="linkcart ">{p.count}</span>
                      <span
                        className="btn-plusCart"
                        onClick={() => incNumOfItem(p)}
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </td>
                  <td>$ {p.price}</td>
                  <td>${p.price * p.count}</td>
                  <td>
                    <div
                      className="btn-trashCart d-flex justify-content-center align-items-center"
                      onClick={() => removeItem(p)}
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
              <td colSpan="2" className="totalPrice fw-bold ">
                Total Price
              </td>
              <td className="totalPrice fw-bold ">$ {totalPrice}</td>
              <td colSpan="4"></td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="vh-100">
          <p className="text-center cardEmpty fs-2 ">Your card is empty</p>
        </div>
      )}
    </div>
  );
}
