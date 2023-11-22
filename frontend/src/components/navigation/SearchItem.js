import React from "react";
import { Link } from "react-router-dom";

export const SearchItem = ({ setIsOpen, result }) => {
  const liClickingHandler = () => {
    setIsOpen(false);
  };

  return (
    <Link to={`/movies/${result.id}`}>
      <li onClick={liClickingHandler}>{result.title}</li>
    </Link>
  );
};
