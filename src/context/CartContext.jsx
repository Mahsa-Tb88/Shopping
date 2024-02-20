import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    item: [],
  });
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
