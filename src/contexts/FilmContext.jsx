import { createContext, useState, useEffect } from 'react';

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
  const [currentMovie, setCurrentMovies] = useState(null);
  const [seenMovies, setSeenMovies] = useState([]);

  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        const res = await fetch('/data/movies.json');
        const data = await res.json();

        const trending = data.TrendingNow || [];
        const featured = data.Featured || null;

        const lastSeenId = sessionStorage.getItem('lastSeen');

        let defaultMovies = trending.find(v => v.Id === lastSeenId)
                          || featured
                          || trending[0];

        if (defaultMovies) {
          setCurrentMovies(defaultMovies);
          if (lastSeenId) {
            setSeenMovies([lastSeenId]);
          }
        }
      } catch (err) {
        console.error('Failed to load initial Movies:', err);
      }
    };

    loadInitialMovies();
  }, []);

  const updateCurrentMovie = (movies) => {
    setCurrentMovies(movies);
    sessionStorage.setItem('lastSeen', movies.Id);
    setSeenMovies((prev) => [movies.Id, ...prev.filter((id) => id !== movies.Id)]);
  };

  return (
    <FilmContext.Provider value={{ currentMovie, updateCurrentMovie, seenMovies }}>
      {children}
    </FilmContext.Provider>
  );
};
