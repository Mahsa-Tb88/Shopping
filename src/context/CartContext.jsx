import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: localStorage.shopping ? JSON.parse(localStorage.shopping) : [],
  });

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
