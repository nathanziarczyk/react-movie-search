import { createContext } from "react";

export const initialMovieState = {
  movie: {},
  background: {},
  loading: false,
  error: null,
};

export const MovieContext = createContext(null);
