const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const movieUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const imgConfigUrl = "https://api.themoviedb.org/3/configuration";

/*test if backend is up* */
app.get("/", (req, res) => {
  res.json("hi");
});

/**get image configuration parameters */
app.get("/config", (req, res) => {
  const options = {
    method: "GET",
    url: imgConfigUrl,
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/movies", (req, res) => {
  const options = {
    method: "GET",
    url: movieUrl,
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Backend is running on ${PORT}`));
