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
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            {movie.movie.title}
          </motion.h2>
        </div>
        {movie.movie.tagline && (
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
              className="tagline"
            >
              {movie.movie.tagline}
            </motion.p>
          </div>
        )}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
            className="description"
          >
            {movie.movie.overview}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className="genres"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
          >
            {movie.movie.genres.map((el, i) => {
              if (i === movie.movie.genres.length - 1) return el.name;
              return `${el.name}, `;
            })}
          </motion.p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delay: 0.45,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="varia"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <span>Release:</span> <span>{movie.movie.release_date}</span>
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <span>Duration:</span> <span>{movie.movie.runtime} min</span>
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <span>Box Office:</span>
            <span>
              $
              {movie.movie.revenue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <span>Vote Average:</span>
            <span>{movie.movie.vote_average}/10</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
