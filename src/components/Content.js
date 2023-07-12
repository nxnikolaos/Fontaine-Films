import Card from "../components/Card";
import { MoviesApiContext } from "../context/MoviesApiContext";
import { useContext, useEffect } from "react";

const Content = () => {
  const [movies, images] = useContext(MoviesApiContext);

  useEffect(() => {
    console.log(movies);
    console.log(images);
  }, [movies, images]);

  const imgSize = "w342"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

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
            ></Card>
          );
        })}
      </section>
    </div>
  );
};

export default Content;
