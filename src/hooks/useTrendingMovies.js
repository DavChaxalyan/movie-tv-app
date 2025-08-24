import { useState, useEffect, useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';
import { sortMovies } from '../services/moviesService';

export function useTrendingMovies(limit = 50) {
  const { seenMovies } = useContext(FilmContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await fetch('/data/movies.json');
        const data = await res.json();
        const trending = data.TrendingNow.slice(0, limit);
        const sorted = sortMovies(trending, seenMovies[0]);
        setMovies(sorted);
      } catch (err) {
        setError(err);
        console.error('Error loading trending Movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [seenMovies, limit]);

  return { movies, loading, error };
}
