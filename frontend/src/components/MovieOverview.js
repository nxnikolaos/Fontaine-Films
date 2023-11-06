import React from "react";

export const MovieOverview = ({ movie, imgPath }) => {
  return (
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
  );
};
