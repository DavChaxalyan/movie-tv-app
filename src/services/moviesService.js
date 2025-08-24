export function sortMovies(movies, lastSeenId) {
    if (!lastSeenId) return movies;
  
    const seen = movies.find(v => v.Id === lastSeenId);
    const rest = movies.filter(v => v.Id !== lastSeenId);
  
    return seen ? [seen, ...rest] : movies;
  }
  