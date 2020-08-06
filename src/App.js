import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import { MovieContext, initialMovieState } from "./context";
import Movie from "./components/Movie";

function App() {
  const [movie, setMovie] = useState({ ...initialMovieState });

  useEffect(() => {
    document.querySelector(
      "body"
    ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.movie.backdrop_path})`;
  }, [movie]);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      <Header />
      <Movie />
    </MovieContext.Provider>
  );
}

export default App;
