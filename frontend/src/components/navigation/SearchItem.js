import React from "react";
import { Link } from "react-router-dom";

export const SearchItem = ({ result }) => {
  return (
    <Link to={`/movies/${result.id}`}>
      <li>{result.title}</li>
    </Link>
  );
};
