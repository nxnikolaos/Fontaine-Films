import { useState, useEffect } from "react";
import { MoviesApiContext } from "./MoviesApiContext";
import axios from "axios";

const MovieStorage = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/movies",
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results.slice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });

    const lala = {
      method: "GET",
      url: "http://localhost:8000/config",
    };
    axios
      .request(lala)
      .then(function (response) {
        setImages(response.data.images);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <MoviesApiContext.Provider value={[movies, images]}>
      {children}
    </MoviesApiContext.Provider>
  );
};

export default MovieStorage;
