import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context";

export default function Movie() {
  const { movie } = useContext(MovieContext);
  console.log(movie);
  return (
    <div className="movie-card container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
        alt=""
      />
      <div className="content">
        <h2>{movie.movie.title}</h2>
        {movie.movie.tagline && (
          <p className="tagline">{movie.movie.tagline}</p>
        )}
        <p className="description">{movie.movie.overview}</p>
        <p className="genres">
          {movie.movie.genres.map((el, i) => {
            if (i === movie.movie.genres.length - 1) return el.name;
            return `${el.name}, `;
          })}
        </p>
        <div className="varia">
          <p>
            <span>Release:</span> <span>{movie.movie.release_date}</span>
          </p>
          <p>
            <span>Duration:</span> <span>{movie.movie.runtime} min</span>
          </p>
          <p>
            <span>Box Office:</span> <span>${movie.movie.revenue}</span>
          </p>
          <p>
            <span>Vote Average:</span> <span>{movie.movie.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
