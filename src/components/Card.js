import image from "../assets/images/g6.png";

const Card = ({ props }) => {
  let title = props.original_title;
  let description = props.overview;
  return (
    <article className="card flex flex-column align-center">
      <img src={image} alt="movie"></img>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export default Card;
