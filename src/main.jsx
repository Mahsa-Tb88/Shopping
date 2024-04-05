import React from "react";
import ReactDOM from "react-dom/client";

import "./utils/globalFunctions.js";
import "./utils/globalConstants.js"; 

import { AppContextProvider } from "./context/AppContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./utils/globalConstants";
import "./assets/css/lightStyles.scss";
import "./assets/css/darkStyles.scss";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import router from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </CartContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
