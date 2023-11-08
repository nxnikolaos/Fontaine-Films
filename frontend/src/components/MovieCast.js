import React from "react";
import blank_profile from "../assets/images/blank-profile.png";

export const MovieCast = ({ movie, imgPath }) => {
  return (
    <section className="cast">
      <h3>Cast : </h3>
      <section className="cast-row">
        {movie.credits &&
          movie.credits.cast.slice(0, 10).map((actor) => {
            return (
              <article className="text-center" key={actor.id}>
                {/* {actor.profile_path && ( */}
                <img
                  className="actor-profile-pic"
                  // src={imgPath + actor.profile_path}
                  src={
                    actor.profile_path
                      ? imgPath + actor.profile_path
                      : blank_profile
                  }
                  alt={"Thumbnail of " + actor.original_name}
                ></img>
                {/* )} */}
                <p> {actor.original_name}</p>
                <p>as</p>
                <p>{actor.character}</p>
              </article>
            );
          })}
      </section>
    </section>
  );
};
