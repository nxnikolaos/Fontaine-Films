import Card from "../components/Card";
import { MoviesApiContext } from "../context/MoviesApiContext";
import { useContext, useEffect } from "react";

const Content = () => {
  const [movies, images, isLoading, isError, imgIsLoading, imgIsError] =
    useContext(MoviesApiContext);

  // useEffect(() => {
  //   console.log(movies);
  //   console.log(images);
  // }, [movies, images]);

  const imgSize = "w342"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

  if (isLoading) {
    return (
      <div className="content" id="loading-content">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="content" id="loading-content">
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div className="content">
      <section className="movies">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.original_title}
              description={movie.overview}
              posterUrl={imgPath + movie.poster_path}
              imgLoading={imgIsLoading}
              imgError={imgIsError}
            ></Card>
          );
        })}
      </section>
    </div>
  );
};

export default Content;
