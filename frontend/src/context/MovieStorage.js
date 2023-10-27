import { useState, useEffect } from "react";
import { MoviesApiContext } from "./MoviesApiContext";
import axios from "axios";

const MovieStorage = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imgIsLoading, setImageIsLoading] = useState(true);
  const [imgIsError, setImgIsError] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/movies",
      // url: "https://fontaine-films.onrender.com/api/movies",
    })
      .then(function (response) {
        setMovies(response.data.results.slice(0, 9));
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });

    axios({
      method: "get",
      url: "/api/config",
      // url: "https://fontaine-films.onrender.com/api/config",
    })
      .then(function (response) {
        setImages(response.data.images);
        console.log(response.data.images);
        setImageIsLoading(false);
      })
      .catch(function (error) {
        setImageIsLoading(false);
        setImgIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <MoviesApiContext.Provider
      value={[movies, images, isLoading, isError, imgIsLoading, imgIsError]}
    >
      {children}
    </MoviesApiContext.Provider>
  );
};

export default MovieStorage;
