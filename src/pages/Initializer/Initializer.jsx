import React from "react";
import { useAppContext } from "../../context/AppContext";
import { MdRefresh } from "react-icons/md";
import "./initializer.scss";
export default function Initializer() {
  const { appState, appDispatch } = useAppContext();
  if (appState.InitializedError) {
    return (
      <div>
        <h2 className="mb-4">{appState.InitializedError}</h2>
        <button
          className="btn btn-lg btn-primary"
          onClick={appState.initializeApp}
        >
          <span>Tray Again</span>
          <MdRefresh size={24} className="ms-2" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="initializer d-flex justify-content-center align-items-center vw-100 vh-100 flex-column">
        <h2 className="mb-4 loading">Loading ...</h2>
        <span className=" spiner spinner-grow fs-1"></span>
      </div>
    );
  }
}
