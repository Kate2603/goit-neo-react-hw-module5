import { useState } from "react";
import { searchMovies } from "../../api/tmdbApi";

import MovieList from "../../components/MovieList/MovieList";
import SearchMovies from "../../components/SearchMovies/SearchMovies";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      if (data.length === 0) {
        setError("No movies found.");
      } else {
        setMovies(data);
        setError(null);
      }
    } catch (err) {
      setError("Error fetching movies");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchMovies onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
