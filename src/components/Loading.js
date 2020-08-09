import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loading">
      {" "}
      <PropagateLoader />
    </div>
  );
}
