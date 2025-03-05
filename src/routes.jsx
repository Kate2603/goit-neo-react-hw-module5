import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/movies", element: <MoviesPage /> },
  {
    path: "/movies/:movieId",
    element: <MovieDetailsPage />,
    children: [
      { path: "cast", element: <MovieCast /> },
      { path: "reviews", element: <MovieReviews /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
