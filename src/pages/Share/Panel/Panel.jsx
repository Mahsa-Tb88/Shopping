import React, { useEffect } from "react";
import "./panel.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { useCartContext } from "../../../context/CartContext";
export default function Panel() {
  const { appState, appDispatch } = useAppContext();
  const { cartState, cartDispatch } = useCartContext();
  console.log(appState.user);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="panel d-flex">
      <div className="w-25 sideBar flex-column d-flex justify-align-content-center align-items-center px-3 vh-100 ">
        <NavLink
          className="link my-3  py-4 w-100 ps-4  w-50 text center"
          to="/panel"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className="link my-3  py-4 w-100 ps-4  w-50 text center"
          to="profile"
        >
          Profile
        </NavLink>
      </div>
      <div className=" w-75 ">
        <Outlet />
      </div>
    </div>
  );
}
