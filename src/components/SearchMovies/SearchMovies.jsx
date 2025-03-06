import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchMovies.module.css";

function SearchMovies({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

SearchMovies.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchMovies;
