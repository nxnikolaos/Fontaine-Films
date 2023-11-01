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

/*get image configuration parameters */

app.get("/api/config", (req, res) => {
  axios({
    method: "get",
    url: `/configuration`,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

/*get movies searched by title */

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

/*get movies based on ID*/

app.get(`/api/movies/id`, (req, res) => {
  const queryID = req.query.paramId;
  const boolActors = req.query.actors;
  let curl = `/movie/${queryID}?language=en-US`;
  boolActors &&
    (curl = `/movie/${queryID}?append_to_response=credits&language=en-US`);
  axios({
    method: `get`,
    url: curl,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

/*get movies now playing in theaters */

app.get("/api/movies/theatres", (req, res) => {
  axios({
    method: "get",
    url: `/movie/now_playing?language=en-US&page=1`,
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Backend is running on ${PORT}`));
