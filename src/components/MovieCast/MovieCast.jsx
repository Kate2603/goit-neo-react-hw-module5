import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/tmdbApi";
import styles from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul className={styles.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.image}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
