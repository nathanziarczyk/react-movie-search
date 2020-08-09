import React from "react";
import Axios from "axios";
import Suggestions from "./Suggestions";
import { useEffect } from "react";
import { useApiSearch } from "../hooks/useApiSearch";

export default function SearchBar() {
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState(null);
  const { fetchData } = useApiSearch();
  useEffect(() => {
    fetchData(157336);
  }, []);

  const handleSearchBarChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length < 3) {
      setSuggestions(null);
      return null;
    }
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${e.target.value}&page=1&language=en-US`
        );
        setSuggestions(data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(suggestions);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search movie"
        onChange={handleSearchBarChange}
        value={value}
      />
      {suggestions && (
        <Suggestions
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          setValue={setValue}
        />
      )}
    </div>
  );
}
