import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesApiContext } from "../context/MoviesApiContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, images, isLoading, isError] = useContext(MoviesApiContext);

  const post = movies.find((movie) => movie.id === Number(id));
  const imgSize = "w500"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

  if (isLoading) {
    return (
      <div id="loading-content">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div id="loading-content">
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div className="card movie-details flex align-center">
      <section className="details-thumbnail">
        <img
          src={imgPath + post.poster_path}
          alt={"Poster for " + post.title}
        ></img>
      </section>
      <section className="details-info">
        <h2>{post.original_title}</h2>
        <span>Release Date : {post.release_date}</span>
        <p>{post.overview}</p>
        <div className="stats flex align-center">
          <div className="details-info-stat">
            Popularity : <span>{post.popularity}</span>
          </div>
          <div className="details-info-stat">
            Vote Average : <span>{post.vote_average}</span>
          </div>
          <div className="details-info-stat">
            Vote Count : <span>{post.vote_count}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
