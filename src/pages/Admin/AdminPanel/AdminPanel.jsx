import React from "react";
import { IoMdMoon } from "react-icons/io";
import "./adminpanel.scss";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
export default function AdminPanel() {
  const { appState, appDispatch } = useAppContext();
  const navigate = useNavigate();
  function signOutHandler() {
    appDispatch({ type: "logOut" });
    navigate("/");
  }
  return (
    <div className="adminPanel d-flex justify-content-center ">
      <div className="sidebarAdmin ">
        <h3 className=" titleAdmin d-flex justify-content-center align-items-center">
          BEAUTYA
        </h3>
        <div className="d-flex flex-column justify-content-center align-items-baseline px-3">
          <NavLink
            className="link my-3 py-4 linkAdmin w-100 ps-4"
            to="products"
          >
            Products
          </NavLink>
          <NavLink
            className="link my-3 py-4 linkAdmin w-100 ps-4"
            to="categories"
          >
            Categories
          </NavLink>
          <NavLink className="link my-3 py-4 linkAdmin w-100 ps-4" to="users">
            Users
          </NavLink>
        </div>
      </div>
      <div className="mainAdmin d-flex flex-column">
        <div className="headerAdmin d-flex justify-content-between align-items-center">
          <h3>Mahsa Tabesh</h3>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn-mood d-flex justify-content-center align-items-center p-1">
              <IoMdMoon />
            </button>
            <button
              className="signout-btnAdmin  py-1 px-3 "
              onClick={signOutHandler}
            >
              Sing Out
            </button>
            <Link className="back-btnAdmin ms-2  py-1 px-3 " to="/panel">
              Back
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
