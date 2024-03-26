import React from "react";
import "./cart.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
export default function Cart() {
  const { cartState, cartDispatch } = useCartContext();
  console.log(cartState.items);
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
                <tr key={p.id} className="table-row">
                  <th scope="row" className="fs-5">
                    {i + 1}
                  </th>

                  <td>
                    <Link
                      className="link fs-4 px-2"
                      to={"/product/" + `${p.id}`}
                    >
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
                      <span className="text-black fs-4 ">{p.count}</span>
                      <span
                        className="btn-plusCart"
                        onClick={() => incNumOfItem(p)}
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </td>
                  <td className="fs-4">$ {p.price}</td>
                  <td className="fs-4">${p.price * p.count}</td>
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
