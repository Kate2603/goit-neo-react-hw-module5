import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Loading trading movies when mounting the component
  useEffect(() => {
    setLoading(true); // Turn on the loading indicator
    fetchTrendingMovies()
      .then(setMovies) // Updating the status with movies
      .catch((err) => {
        setError("Не удалось загрузить трейдинговые фильмы.");
        console.error(err);
      })
      .finally(() => setLoading(false)); // Disable loading indicator
  }, []);

  return (
    <div className="home-page-container">
      <div className="main-content">
        <h1>Trending Movies</h1>
      </div>

      {/* Loading indicator */}
      {loading && <p>Загрузка...</p>}

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* Movie Grid */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
