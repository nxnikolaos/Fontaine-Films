import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgConfigContext } from "../context/ImgConfigContext";
import { StateContext } from "../context/StateContext";
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
    };
    axios({
      method: "get",
      url: `/api/movies/id`,
      // url: `https://fontaine-films.onrender.com/api/movie/id`,
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
    <div className="card movie-details flex align-center">
      <section className="details-thumbnail">
        <img
          src={imgPath + movie.poster_path}
          alt={"Poster for " + movie.title}
        ></img>
      </section>
      <section className="details-info">
        <h2>{movie.original_title}</h2>
        <span>Release Date : {movie.release_date}</span>
        <p>{movie.overview}</p>
        <div className="stats flex align-center">
          <div className="details-info-stat">
            Popularity : <span>{movie.popularity}</span>
          </div>
          <div className="details-info-stat">
            Vote Average : <span>{movie.vote_average}</span>
          </div>
          <div className="details-info-stat">
            Vote Count : <span>{movie.vote_count}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
