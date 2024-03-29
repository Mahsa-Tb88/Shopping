import React, { useEffect } from "react";
import "./header.scss";
import { IoMdMoon } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../../context/CartContext";
import { MdOutlineWbSunny } from "react-icons/md";

export default function Header() {
  const { appState, appDispatch } = useAppContext();
  const { cartState, cartDispatch } = useCartContext();

  useEffect(() => {
    if (localStorage.token || sessionStorage.token) {
      const timeOut = setTimeout(fetchUser, 20);
      return () => clearTimeout(timeOut);
    }
  }, []);
  async function fetchUser() {
    await appState.initializeApp();
  }
  const navigate = useNavigate();
  function signOutHandler() {
    appDispatch({ type: "logOut" });
    navigate("/");
  }

  function shoppingCartHandler() {
    if (appState.user.isLoggedIn) {
      navigate("/panel/cart");
    } else {
      navigate("/login");
    }
  }

  function themeHandler() {
    const theme = appState.theme == "dark" ? "light" : "dark";
    appDispatch({ type: "setTheme", payload: theme });
  }

  return (
    <div className=" d-flex justify-content-between align-items-center header">
      <div>
        <Link to="/">
          <img href="logo" className="logo" src="./public/images/logo.png" />
        </Link>
      </div>
      <nav className="navBar ">
        <NavLink className="navlink" end to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="shop">
          Products
        </NavLink>
        <NavLink className="navlink" to="blogs">
          Blog
        </NavLink>
        <NavLink className="navlink" to="about">
          About us
        </NavLink>
        <NavLink className="navlink" to="contact">
          Contact us
        </NavLink>
      </nav>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-mood d-flex justify-content-center align-items-center p-1"
          onClick={themeHandler}
        >
          {appState.theme == "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
        </button>
        <div
          className=" position-relative cart me-4 bc_shaoppingcart d-flex justify-content-center align-items-center"
          onClick={() => shoppingCartHandler()}
        >
          {!cartState.items.length ? (
            <AiOutlineShoppingCart className="shaoppingcart" />
          ) : (
            <div>
              <FaShoppingCart className="shaoppingcart" />
              <span className="  numItem rounded-circle">
                {cartState.items.length > 10 ? "10+" : cartState.items.length}
              </span>
            </div>
          )}
        </div>
        {!appState.user.isLoggedIn ? (
          <div>
            <Link className="btns btn-signIn px-3 py-2 link" to="/login">
              Sign in
            </Link>
            <Link
              className="btns btn-signUp mx-3 px-3 py-2 link"
              to="/register"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Link
              className="userpanel-btn btns py-1 px-3 me-3 link"
              to="/panel/profile"
            >
              Profile
            </Link>
            {appState.user.role == "admin" && (
              <Link
                className="adminpanel-btn btns py-1 px-3 me-3 link"
                to="/admin"
              >
                Managing
              </Link>
            )}
            <button
              className="signout-btn  py-1 px-3 "
              onClick={signOutHandler}
            >
              Sing Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
