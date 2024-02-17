import React from "react";

import { Outlet } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import Initializer from "../../Initializer/Initializer";
import Header from "../../../components/Share/Header/Header";
import Footer from "../../../components/Share/Footer/Footer";

export default function Home() {
  const { appState, appDispatch } = useAppContext();
  console.log("homeee");

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
