import React from "react";
import { useContext } from "react";
import { motion } from "framer-motion";

import { MovieContext } from "../context";

export default function Movie() {
  const { movie } = useContext(MovieContext);

  return (
    <div className="movie-card container">
      <motion.img
        src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
        alt="poster"
        initial={{ opacity: 0, size: 0.5 }}
        animate={{ opacity: 1, size: 1 }}
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
        <motion.div className="varia">
          <p>
            <span>Release:</span> <span>{movie.movie.release_date}</span>
          </p>
          <p>
            <span>Duration:</span> <span>{movie.movie.runtime} min</span>
          </p>
          <p>
            <span>Box Office:</span>
            <span>
              $
              {movie.movie.revenue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
          <p>
            <span>Vote Average:</span>
            <span>{movie.movie.vote_average}/10</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
