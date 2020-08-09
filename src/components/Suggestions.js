import React from "react";
import { useApiSearch } from "../hooks/useApiSearch";
import { motion } from "framer-motion";

export default function Suggestions({ suggestions, setSuggestions, setValue }) {
  const { fetchData } = useApiSearch();
  return (
    <motion.div
      initial={{ opacity: 0, x: "-10" }}
      animate={{ opacity: 1, x: 0 }}
      className="suggestions"
    >
      <ul>
        {suggestions.map((el) => (
          <li
            key={el.id}
            onClick={(e) => {
              fetchData(el.id);
              setSuggestions(null);
              setValue(el.title);
            }}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
