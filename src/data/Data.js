import { useState, useEffect } from "react";

const Data = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "zaza",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return <></>;
};

export default Data;
