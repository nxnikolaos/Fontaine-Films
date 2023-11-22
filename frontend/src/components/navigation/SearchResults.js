import { SearchItem } from "./SearchItem";
import { useRef, useEffect } from "react";

const SearchResults = ({ results, isOpen, setIsOpen }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        // Click occurred outside the container, so close it
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div ref={containerRef} className="search-results-container">
      <ul className="search-list">
        {results.map((result, id) => {
          return <SearchItem setIsOpen={setIsOpen} result={result} key={id} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
