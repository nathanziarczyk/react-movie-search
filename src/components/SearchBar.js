import React from "react";
import Axios from "axios";
import Suggestions from "./Suggestions";

export default function SearchBar() {
  const [suggestions, setSuggestions] = React.useState(null);

  const handleSearchBarChange = (e) => {
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
      <input type="text" onChange={handleSearchBarChange} />
      {suggestions && (
        <Suggestions
          suggestions={suggestions}
          setSuggestions={setSuggestions}
        />
      )}
    </div>
  );
}
