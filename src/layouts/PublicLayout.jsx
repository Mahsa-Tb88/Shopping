import React from "react";

import { Outlet } from "react-router-dom";
import Initializer from "../pages/Initializer/Initializer";
import Footer from "../components/Share/Footer/Footer";
import Header from "../components/Share/Header/Header";
import { useAppContext } from "../context/AppContext";

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
