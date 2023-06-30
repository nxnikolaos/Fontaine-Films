import image from "../assets/images/g6.png";

const Card = () => {
  return (
    <article className="card flex flex-column align-center">
      <img src={image} alt="movie"></img>
      <h4>Movie Title</h4>
      <p>Genres, Actors</p>
    </article>
  );
};

export default Card;
