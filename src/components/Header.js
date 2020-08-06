import React from "react";

import { useApiSearch } from "../hooks/useApiSearch";
import SearchBar from "./SearchBar";

export default function Header() {
  useApiSearch(550);
  return (
    <div className="header container">
      <p>logo</p>
      <SearchBar />
    </div>
  );
}
