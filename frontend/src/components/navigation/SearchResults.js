import { SearchItem } from "./SearchItem";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      <ul className="search-list">
        {results.map((result, id) => {
          return <SearchItem result={result} key={id} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
