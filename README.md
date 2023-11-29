# FontaineFilms : Based on the TMDB API.

Movie database React application, using a proxy backend server to make API calls.<br>
Users are able to search and get information on a movie of their choice.

## Preview the application : [FontaineFilms](https://fontaine-films.netlify.app/)

PS. It takes a couple of seconds for the first request to load.

# Table of Contents

- [Technologies](#technologies)
- [Architecture](#architecture)
- [Components](#components)
  - [Global](#global)
    - [Navbar](#navbar)
    - [Footer](#footer)
  - [Pages](#pages)
    - [Home](#home)
    - [MovieDetails](#movie-details)

# Technologies

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Backend Proxy Server](#backend-proxy-server)
  - [Axios](https://axios-http.com/)
  - [Express](https://expressjs.com/)
  - [Dotenv](https://www.npmjs.com/package/dotenv)

# Architecture

The application is split in two parts. The frontend and the backend.<br>
Each part of the app is uploaded to GitHub as a single repo.<br>
From there [Netlify](https://www.netlify.com/) is used to deploy the frontend part of the app(pulled from GitHub).<br>
[Render](https://render.com/) hosts the backend part of app(also pulled from GitHub).

![FontaineFilms - Architecture](/frontend/src/assets/images/architecture.png)

# Components

## Global

### Navbar

[Navbar Component](/frontend/src/components/navigation/Navbar.js)

### Footer

[Footer Component](/frontend/src/components/Footer.js)

## Pages

### Home

[Home Component](/frontend/src/pages/Home.js)

### Movie Details

[MovieDetails Component](/frontend/src/pages/MovieDetails.js)

# Backend Proxy Server
