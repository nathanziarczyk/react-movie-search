import React from "react";

import SearchBar from "./SearchBar";
import svg from "../images/tmdb.svg";

export default function Header() {
  return (
    <div className="header container">
      <img src={svg} />
      <SearchBar />
    </div>
  );
}
