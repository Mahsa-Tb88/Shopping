import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { CartContextProvider } from "./context/CartContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
