import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgConfigContext } from "../context/ImgConfigContext";
import { StateContext } from "../context/StateContext";
import { MovieOverview } from "../components/MovieOverview";
import { MovieCast } from "../components/MovieCast";
import LoadingState from "../components/handlers/LoadingState";
import ErrorState from "./ErrorState";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [images] = useContext(ImgConfigContext);
  const { isLoading, isError, setIsLoading, setIsError } =
    useContext(StateContext);
  const [movie, setMovie] = useState([]);

  const imgSize = "w500"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

  useEffect(() => {
    const queryParams = {
      paramId: Number(id),
      actors: true,
    };
    axios({
      method: "get",
      url: `/api/movies/id`,
      // url: `https://fontaine-films.onrender.com/api/movies/id`,
      params: queryParams,
    })
      .then(function (response) {
        const results = response.data;
        setMovie(results);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, [id, setIsLoading, setIsError]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <div key={movie.id} className="card movie-details">
      <MovieOverview movie={movie} imgPath={imgPath}></MovieOverview>
      <MovieCast movie={movie} imgPath={imgPath}></MovieCast>
    </div>
  );
};

export default MovieDetails;
