import React from "react";
import { useAppContext } from "../../context/AppContext";
import { MdRefresh } from "react-icons/md";
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
      <div>
        <h2 className="mb-4">Loading ...</h2>
        <span className="spiner spinner-grow text-primary"></span>
      </div>
    );
  }
}
