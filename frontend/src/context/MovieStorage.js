import { useState, useEffect } from "react";
import { ImgConfigContext } from "./ImgConfigContext";
import axios from "axios";

const MovieStorage = ({ children }) => {
  const [images, setImages] = useState([]);
  const [imgIsLoading, setImageIsLoading] = useState(true);
  const [imgIsError, setImgIsError] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/config",
      // url: "https://fontaine-films.onrender.com/api/config",
    })
      .then(function (response) {
        setImages(response.data.images);
        setImageIsLoading(false);
      })
      .catch(function (error) {
        setImageIsLoading(false);
        setImgIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <ImgConfigContext.Provider
      value={[
        images,
        imgIsLoading,
        imgIsError,
        setImageIsLoading,
        setImgIsError,
      ]}
    >
      {children}
    </ImgConfigContext.Provider>
  );
};

export default MovieStorage;
