import { useState } from "react";

const Card = ({ title, description, posterUrl, imgLoading, imgError }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="card flex flex-column align-center">
      {imgLoading && <h4>Loading Image...</h4>}
      {imgError && <h4>Image Error...</h4>}
      <img src={posterUrl} alt={"Poster for " + title}></img>
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
