import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = (value) => {
    const queryParams = {
      param1: value,
    };

    axios({
      method: "get",
      // url: `/api/movies/search`,
      url: `https://fontaine-films.onrender.com/api/movies/search`,
      params: queryParams,
    })
      .then(function (response) {
        const results = response.data.results.filter((movie) => {
          return (
            value &&
            movie &&
            movie.title &&
            movie.title.toLowerCase().includes(value)
          );
        });
        setResults(results.slice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData(input);
    }, 500);

    results.length > 0 ? setIsOpen(true) : setIsOpen(false);

    return () => clearTimeout(timeoutId);
  }, [input, results.length]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search movie..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        {isOpen ? (
          <SearchResults
            results={results}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </div>
    </>
  );
};

export default Searchbar;
