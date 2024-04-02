import React, { useEffect, useState } from "react";
import "./header.scss";
import { IoMdMoon } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../../context/CartContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
export default function Header() {
  const { appState, appDispatch } = useAppContext();
  const { cartState, cartDispatch } = useCartContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (localStorage.token || sessionStorage.token) {
      const timeOut = setTimeout(fetchUser, 20);
      return () => clearTimeout(timeOut);
    }
  }, []);
  const menuClass = [
    "d-flex flex-column justify-content-between align-items-baseline navbar-mobile",
    `${isOpenMenu ? "showMenu" : ""}`,
  ].join(" ");
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
      <div className="d-none d-lg-block">
        <Link to="/">
          <img href="logo" className="logo" src="./public/images/logo.png" />
        </Link>
      </div>
      <nav className="d-none d-lg-block">
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
      <div className="d-lg-none d-flex justify-content-between align-items-center ">
        {!isOpenMenu ? (
          <IoIosMenu
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="fs-1 icon-nav"
          />
        ) : (
          <RxCrossCircled
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="fs-1 icon-nav"
          />
        )}
        <div className="d-flex justify-content-between align-items-center ms-1">
          <button
            className="btn-mood d-lg-none d-flex ms-2 justify-content-center align-items-center"
            onClick={themeHandler}
          >
            {appState.theme == "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
          </button>
          <div
            className=" position-relative cart   d-lg-none d-flex justify-content-center align-items-center"
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
        </div>
        <nav className={menuClass}>
          <NavLink className="navlink py-4 ps-3 w-100" end to="/">
            Home
          </NavLink>
          <NavLink className="navlink py-4 ps-3 w-100" to="shop">
            Products
          </NavLink>
          <NavLink className="navlink py-4 ps-3 w-100" to="blogs">
            Blog
          </NavLink>
          <NavLink className="navlink py-4 ps-3 w-100" to="about">
            About us
          </NavLink>
          <NavLink className="navlink py-4 ps-3 w-100" to="contact">
            Contact us
          </NavLink>
        </nav>
      </div>
      <div className="d-lg-none ">
        <Link to="/">
          <img
            href="logo"
            className="logo-mobile"
            src="./public/images/logo.png"
          />
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn-mood d-none d-lg-flex me-1 justify-content-center align-items-center"
          onClick={themeHandler}
        >
          {appState.theme == "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
        </button>
        <div
          className=" position-relative cart me-3 d-none d-lg-flex justify-content-center align-items-center"
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
          <div className=" d-flex justify-content-between align-items-center">
            <Link
              className="btns btn-signIn d-flex justify-content-center align-items-center link"
              to="/login"
            >
              Sign in
            </Link>
            <Link
              className="btns btn-signUp d-flex justify-content-center align-items-center ms-2 ms-md-3 link"
              to="/register"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Link
              className="userpanel-btn text-center btns py-1 px-1 px-md-3 me-2 me-md-3 link"
              to="/panel/profile"
            >
              Profile
            </Link>
            {appState.user.role == "admin" && (
              <Link
                className="adminpanel-btn text-center btns py-1 px-1 px-md-3 me-2 me-md-3 link"
                to="/admin"
              >
                Managing
              </Link>
            )}
            <button
              className="signout-btn  py-1 px-1 px-md-3 "
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
