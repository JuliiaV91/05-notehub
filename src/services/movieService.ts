import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<{ results: Movie[] }>(API_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.results;
};
