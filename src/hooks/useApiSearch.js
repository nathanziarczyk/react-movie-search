import React from "react";
import { useEffect } from "react";
import Axios from "axios";

import { MovieContext } from "../context";

export const useApiSearch = (id) => {
  const { movie, setMovie } = React.useContext(MovieContext);
  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [id]);
};
