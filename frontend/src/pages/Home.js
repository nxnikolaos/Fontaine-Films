import Card from "../components/Card";
import { ImgConfigContext } from "../context/ImgConfigContext";
import { useContext, useEffect, useState } from "react";
import ErrorState from "./ErrorState";
import LoadingState from "../components/handlers/LoadingState";
import axios from "axios";

const Home = () => {
  const [images, imgIsLoading, imgIsError] = useContext(ImgConfigContext);
  const imgSize = "w342"; //config db img size
  const imgPath = images.secure_base_url + imgSize;

  const [inTheatres, setInTheatres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/movies/theatres",
      // url: "https://fontaine-films.onrender.com/api/movies/theatres",
    })
      .then(function (response) {
        setInTheatres(response.data.results.slice(0, 9));
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <section className="movies">
      {inTheatres.map((movie) => {
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
