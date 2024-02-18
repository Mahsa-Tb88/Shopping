import React from "react";
import "./header.scss";
import { IoMdMoon } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
  const { appState, appDispatch } = useAppContext();
  const navigate = useNavigate();
  function signOutHandler() {
    // appDispatch({type:"set"})
    navigate("/")
  }
  console.log(appState.user);
  return (
    <div className=" d-flex justify-content-between align-items-center header">
      <div>
        <Link to="/">
          <img href="logo" className="logo" src="./public/images/logo.png" />
        </Link>
      </div>
      <nav className="navBar ">
        <NavLink className="navlink">Home</NavLink>
        <NavLink className="navlink">Woman Skincare</NavLink>
        <NavLink className="navlink">Blog</NavLink>
        <NavLink className="navlink">About us</NavLink>
        <NavLink className="navlink">Contact us</NavLink>
      </nav>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-mood d-flex justify-content-center align-items-center p-1">
          <IoMdMoon />
        </button>
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
            <Link className="userpanel-btn btns py-1 px-3 me-3">
              User Panel
            </Link>
            {appState.user.role == "admin" ? (
              <Link className="adminpanel-btn btns py-1 px-3 me-3 link">
                Admin Panel
              </Link>
            ) : (
              ""
            )}
            <button
              className="signout-btn btns py-1 px-3 link"
              onClick={signOutHandler}
            >
              Sing Out
            </button>
            <div className="ms-3 position-relative cart">
              <FaShoppingCart className="shaoppingcart" />
              <span className=" fs-5 numItem rounded-circle">0</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
