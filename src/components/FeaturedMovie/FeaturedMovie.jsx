import { useContext } from 'react';
import { FilmContext } from '../../contexts/FilmContext';
import styles from './FeaturedMovie.module.css';
import { formatDuration } from '../../services/formatDuration';

export default function FeaturedMovie() {
  const { currentMovie } = useContext(FilmContext);

  if (!currentMovie) return null;

  return (
    <div
      className={styles.container}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.category}>{currentMovie.Category}</p>
          <img src={`/assets/title_images/${currentMovie.TitleImage}`} alt="Movie Logo" className={styles.logo} />
          <div className={styles.meta}>
            <p>{currentMovie.ReleaseYear}</p>
            <p>{currentMovie.MpaRating}</p>
            <p>{formatDuration(currentMovie.Duration)}</p> 
          </div>
          <p className={styles.description}>{currentMovie.Description}</p>
          <div className={styles.buttons}>
            <button className={styles.play}>▶ Play</button>
            <button className={styles.info}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
