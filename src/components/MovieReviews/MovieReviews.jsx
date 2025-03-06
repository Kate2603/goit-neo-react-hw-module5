import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchMovieReviews } from "../../api/tmdbApi";
import styles from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.item}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

MovieReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieReviews;
