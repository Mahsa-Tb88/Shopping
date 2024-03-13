import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { json } from "react-router-dom";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
    saveToLocalStorage,
  });
  function saveToLocalStorage(items) {
    if (items.length) {
      localStorage.shopping = JSON.stringify(items);
    } else {
      delete localStorage.shopping;
    }
  }
  function loadedFromLocalStorage() {
    localStorage.shopping
      ? cartDispatch({
          type: "updateShoppingProducts",
          payload: JSON.parse(localStorage.shopping),
        })
      : "";
  }
  window.addEventListener("storage", loadedFromLocalStorage);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartContextProvider, useCartContext };
