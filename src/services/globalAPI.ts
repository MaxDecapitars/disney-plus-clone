import { MoviesResponse, GenresResponse } from '@/types/services';
import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzliNGI5MTU1YTZlNGU3NDE1ZTk1YmJkYWY2YzRjZCIsInN1YiI6IjY0N2I5MmI0OTM4MjhlMDExNjI0N2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VgpkXGF2qpAhJNxY4DzxOa5ljiTtoUTgjcHxOvmuQE';

const instanceAPI: AxiosInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const getTrendingMovies = instanceAPI.get<MoviesResponse>(
  '/trending/movie/day'
);
const getGenresMovies = instanceAPI.get<GenresResponse>('/genre/movie/list');

const getMoviesByGenre = (genreId: number) =>
  instanceAPI.get<MoviesResponse>(`/discover/movie?with_genres=${genreId}`);

export default {
  getTrendingMovies,
  getGenresMovies,
  getMoviesByGenre,
  IMAGE_BASE_URL,
};
