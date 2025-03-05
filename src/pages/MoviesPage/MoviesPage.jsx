import { useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

function MoviePage() {
  const { movieId } = useParams();

  return (
    <div>
      <h2>Movie Details</h2>

      {/* Components for displaying cast and review information */}
      <MovieCast movieId={movieId} />
      <MovieReviews movieId={movieId} />
    </div>
  );
}

export default MoviePage;
