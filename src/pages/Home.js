import Card from "../components/Card";
import { MoviesApiContext } from "../context/MoviesApiContext";
import { useContext } from "react";
import ErrorState from "./ErrorState";
import LoadingState from "../components/handlers/LoadingState";

const Home = () => {
  const [movies, images, isLoading, isError, imgIsLoading, imgIsError] =
    useContext(MoviesApiContext);

  // useEffect(() => {
  //   console.log(movies);
  //   console.log(images);
  // }, [movies, images]);

  const imgSize = "w342"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            description={movie.overview}
            posterUrl={imgPath + movie.poster_path}
            imgLoading={imgIsLoading}
            imgError={imgIsError}
          ></Card>
        );
      })}
    </section>
  );
};

export default Home;
