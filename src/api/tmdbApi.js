import axios from "axios";

const API_KEY = "d03486e90ea71f6c430633f88c8a426b";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return response.data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data.cast;
};

const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export {
  fetchTrendingMovies,
  searchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
