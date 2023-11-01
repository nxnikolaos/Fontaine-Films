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
      actors: true,
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
        console.log(results);
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
    <div className="card movie-details">
      <section className="flex align-center">
        <section className="details-thumbnail">
          <img
            src={imgPath + movie.poster_path}
            alt={"Poster for " + movie.title}
          ></img>
        </section>
        <section className="details-info">
          <h2>{movie.original_title}</h2>
          <p className="details-info-stat">
            Release Date : <span>{movie.release_date}</span>
          </p>

          {movie.genres /*Conditionally render the genres if defined */ && (
            <p className="comma-after">
              Genres :{" "}
              {movie.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </p>
          )}
          <p>{movie.overview}</p>
          <p className="details-info-stat">
            Runtime : <span>{movie.runtime} minutes.</span>
          </p>
          <div className="stats flex align-center">
            <p className="details-info-stat">
              Popularity : <span>{movie.popularity}</span>
            </p>
            <p className="details-info-stat">
              Rating : <span>{movie.vote_average}</span>
            </p>
            <p className="details-info-stat">
              Vote Count : <span>{movie.vote_count}</span>
            </p>
          </div>
        </section>
      </section>
      <section className="cast">
        <h3>Cast : </h3>
        <section className="cast-row">
          {movie.credits.cast.slice(0, 10).map((actor) => {
            return (
              <article className="text-center" key={actor.id}>
                <img
                  className="actor-profile-pic"
                  src={imgPath + actor.profile_path}
                  alt={"Thumbnail of " + actor.original_name}
                ></img>
                <p> {actor.original_name}</p>
                <p>as</p>
                <p>{actor.character}</p>
              </article>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default MovieDetails;
