import React, { useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import "./adminlayout.scss";
import { MdOutlineWbSunny } from "react-icons/md";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Initializer from "../pages/Initializer/Initializer";
export default function AdminLayout() {
  const { appState, appDispatch } = useAppContext();
  const navigate = useNavigate();
  function signOutHandler() {
    appDispatch({ type: "logOut" });
    navigate("/");
  }
  function themeHandler() {
    const theme = appState.theme == "dark" ? "light" : "dark";
    appDispatch({ type: "setTheme", payload: theme });
  }
  useEffect(() => {
    if (appState.initialized && !appState.user.isAdmin) {
      navigate("/");
    }
  }, [appState.initialized]);

  if (!appState.initialized || appState.initializedError) {
    return <Initializer />;
  } else {
    return (
      <div className="adminlayout d-flex justify-content-center ">
        <div className="sidebarAdmin ">
          <h3 className=" titleAdmin d-flex justify-content-center align-items-center">
            <Link to="/">
              <img src="../public/images/logo.png" className="logo-admin" />
            </Link>
          </h3>
          <div className=" d-flex flex-column  px-3 vh-100">
            <NavLink
              className="link my-3 py-4 linkAdmin w-100 ps-md-4 "
              to="products"
            >
              Products
            </NavLink>
            <NavLink
              className="link my-3 py-4 linkAdmin w-100 ps-md-4 "
              to="categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="link my-3 py-4 linkAdmin w-100 ps-md-4 "
              to="users"
            >
              Users
            </NavLink>
            <NavLink
              className="link my-3 py-4 linkAdmin w-100 ps-md-4 "
              to="blogs"
            >
              Blogs
            </NavLink>
          </div>
        </div>
        <div className="mainAdmin d-flex flex-column">
          <div className="headerAdmin d-flex justify-content-between align-items-center">
            <h3>{appState.user.firstname + " " + appState.user.lastname}</h3>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn-mood d-flex justify-content-center align-items-center p-1"
                onClick={themeHandler}
              >
                {appState.theme == "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
              </button>
              <button
                className="signout-btnAdmin  py-1 px-md-3 "
                onClick={signOutHandler}
              >
                Sing Out
              </button>
              <Link className="back-btnAdmin ms-2  py-1 px-md-3 " to="/panel">
                Back
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }
}
