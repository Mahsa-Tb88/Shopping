import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function Initializer() {
  const { appState, appDispatch } = useAppContext();
  if (appState.InitializedError) {
    return (
      <div>
        <h2>{appState.InitializedError}</h2>
        <p>Try Again</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Loading ...</h2>
        <span className="spiner spinner-grow text-primary"></span>
      </div>
    );
  }
}
