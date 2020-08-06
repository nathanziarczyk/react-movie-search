import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context";

export default function Movie() {
  const { movie } = useContext(MovieContext);
  console.log(movie);
  return (
    <div className="movie-card">
      <div
        className="left"
        style={{ backgroundImage: movie.movie.poster_path }}
      ></div>
      <div className="right"></div>
    </div>
  );
}
