// const PORT = 8080;
const PORT = process.env.PORT || 3030;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

/*axios default configuration */
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_API_KEY}`;
axios.defaults.headers.common["Content-Type"] = `application/json`;

const movieUrl = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const imgConfigUrl = `/configuration`;
// let queryUrl = `${baseUrl}search/movie?query=${lord}&include_adult=false&language=en-US&page=1`;
// let queryUrl = `/search/movie?query=lord&include_adult=false&language=en-US&page=1`;

app.use(express.static("build"));

/**get image configuration parameters */

app.get("/api/config", (req, res) => {
  axios({
    method: "get",
    url: imgConfigUrl,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

/*get recent movies */

app.get("/api/movies", (req, res) => {
  axios({
    method: "get",
    url: movieUrl,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

/*search query request */

app.get(`/api/movies/search`, (req, res) => {
  axios({
    method: "get",
    url: `search/movie?query=&include_adult=false&language=en-US&page=1`,
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Backend is running on ${PORT}`));
