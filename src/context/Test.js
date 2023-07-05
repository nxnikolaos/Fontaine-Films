import { useState, useEffect } from "react";

const Test = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex flex-column align-center mw">
      {movies.map((movie) => {
        return (
          <article hey={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Test;
