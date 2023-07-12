import { useState } from "react";

const Card = ({ title, description, posterUrl }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="card flex flex-column align-center">
      <img src={posterUrl} alt="movie"></img>
      <h4>{title}</h4>
      <p>
        {readMore ? description : `${description.substring(0, 200)}...`}
        <button
          className="readmore-button"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      </p>
    </article>
  );
};

export default Card;
