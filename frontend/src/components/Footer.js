import tmdb_logo from "../assets/images/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer className="text-center">
      <p>
        Created by Nikos Chatzinikolas.<br></br>
        This product uses the{" "}
        <a href="https://developer.themoviedb.org/docs">TMDB API </a>
        but is not endorsed or certified by{" "}
        <a href="https://www.themoviedb.org/">TMDB</a>.
      </p>
      <a href="https://www.themoviedb.org/">
        <img className="footer-logo" src={tmdb_logo} alt="TMDB Logo"></img>
      </a>
    </footer>
  );
};

export default Footer;
