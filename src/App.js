import React, { useState } from "react";

import Header from "./components/Header";
import { MovieContext, initialMovieState } from "./context";

function App() {
  const [movie, setMovie] = useState({ ...initialMovieState });
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      <Header />
    </MovieContext.Provider>
  );
}

export default App;
