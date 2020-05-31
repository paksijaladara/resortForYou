import React from "react";
import loadingGif from "../images/gif/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>please wait a moment, data is being prepared</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
}
