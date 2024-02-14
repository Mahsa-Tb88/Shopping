import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Initializer from "../pages/Initializer/Initializer";

export default function PublicLayout() {
  const { appState, appDispatch } = useAppContext();

  if (!appState.initialized || appState.initializedError) {
    return <Initializer />;
  } else {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
