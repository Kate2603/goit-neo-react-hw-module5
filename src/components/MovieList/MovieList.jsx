import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.card}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.cardLink}
          >
            {/* Movie card */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{movie.title}</h3>
              <p className={styles.cardReleaseDate}>
                Release: {movie.release_date}
              </p>
              <p className={styles.cardRating}>Rating: {movie.vote_average}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
