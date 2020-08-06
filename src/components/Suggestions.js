import React from "react";
import { useApiSearch } from "../hooks/useApiSearch";

export default function Suggestions({ suggestions, setSuggestions }) {
  const { fetchData } = useApiSearch();
  return (
    <div className="suggestions">
      <ul>
        {suggestions.map((el) => (
          <li
            key={el.id}
            onClick={(e) => {
              fetchData(el.id);
              setSuggestions(null);
            }}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
