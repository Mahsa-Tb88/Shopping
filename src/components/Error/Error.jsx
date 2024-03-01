import React from "react";

export default function Error({ message,fetch }) {
  return (
    <div className="text-center error">
    <h3 className="title-error">{message}</h3>
      <button className="btn-error" onClick={() => fetch()}>Try Again</button>
    </div>
  );
}
