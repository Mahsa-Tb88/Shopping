import React from "react";
import "./header.scss";
import { IoMdMoon } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
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
        <Link className="btns btn-signIn px-3 py-2 link" to="/login">
          Sign in
        </Link>
        <Link className="btns btn-signUp mx-3 px-3 py-2 link" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  );
}
