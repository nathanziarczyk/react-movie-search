import React from "react";
import { useApiSearch } from "../hooks/useApiSearch";

export default function Suggestions({ suggestions }) {
  const { fetchData } = useApiSearch();
  return (
    <div className="suggestions">
      <ul>
        {suggestions.map((el) => (
          <li onClick={(e) => fetchData(el.id)}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
