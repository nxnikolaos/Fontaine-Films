import { useState, useEffect } from "react";
import axios from "axios";

const MovieFetch = () => {
  const [movies, setMovies] = useState([]);

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
  }, []);
  return movies;
};

export default MovieFetch;
