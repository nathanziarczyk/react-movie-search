import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import { MovieContext, initialMovieState } from "./context";
import Movie from "./components/Movie";
import Loading from "./components/Loading";

function App() {
  const [movie, setMovie] = useState({ ...initialMovieState });

  useEffect(() => {
    document.querySelector("body").style.background = movie.movie.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original/${movie.movie.backdrop_path})`
      : "black";
  }, [movie]);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      <div className="overlay">
        <Header />
        {movie.movie.title && <Movie />}
        {movie.loading && <Loading />}
      </div>
    </MovieContext.Provider>
  );
}

export default App;
