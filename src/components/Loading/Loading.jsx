import React from "react";
import "./loading.scss"
export default function Loading() {
  return (
    <div className="loadingComp text-center">
      <h3 className="title-loadingComp fs-1">Loading ...</h3>
      <p className="spinner spinner-grow spiner-loadingComp fs-3"></p>
    </div>
  );
}
