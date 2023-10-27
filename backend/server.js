// const PORT = 8080;
const PORT = process.env.PORT || 3030;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.static("build"));

/*axios default configuration */
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_API_KEY}`;
axios.defaults.headers.common["Content-Type"] = `application/json`;

const movieUrl = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const imgConfigUrl = `/configuration`;

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
  const param1 = req.query.param1;
  axios({
    method: "get",
    url: `/search/movie?query=${param1}&include_adult=false&language=en-US&page=1`,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get(`/api/movie/id`, (req, res) => {
  const queryID = req.query.paramId;
  axios({
    method: `get`,
    url: `/movie/${queryID}?language=en-US`,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Backend is running on ${PORT}`));
