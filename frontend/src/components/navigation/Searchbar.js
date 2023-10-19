import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData(input);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [input]);

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
        {results.length > 0 ? <SearchResults results={results} /> : null}
      </div>
    </>
  );
};

export default Searchbar;
