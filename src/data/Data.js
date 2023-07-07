import { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
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
  return (
    <section>
      {movies.map((movie) => {
        return (
          <article key={movie.id}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Data;
