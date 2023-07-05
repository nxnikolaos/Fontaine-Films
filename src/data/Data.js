import { useState, useEffect } from "react";

const Data = () => {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/top17";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3bbe1e218emsh33ff615efc7b1d9p12f696jsnf5ea644365e0",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  }, []);
  return <></>;
};

export default Data;
