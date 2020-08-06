import React from "react";
import { useEffect } from "react";
import Axios from "axios";

import { MovieContext } from "../context";

export const useApiSearch = () => {
  const { movie, setMovie } = React.useContext(MovieContext);
  const fetchData = async (id) => {
    setMovie({
      ...movie,
      loading: true,
    });

    try {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovie({ ...movie, movie: data, loading: false });
    } catch (error) {
      setMovie({ ...movie, loading: false, error });
    }
  };
  return { fetchData };
};
