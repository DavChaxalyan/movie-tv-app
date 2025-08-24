import { useContext, useState } from 'react';
import { FilmContext } from '../../contexts/FilmContext';
import styles from './FeaturedMovie.module.css';
import { formatDuration } from '../../services/formatDuration';

export default function FeaturedMovie() {
  const { currentMovie } = useContext(FilmContext);
  const [isPlaying, setIsPlaying] = useState(false);


  if (!currentMovie) return null;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };
  return (
    <div
      className={styles.container}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.category}>{currentMovie.Category}</p>
          <img src={currentMovie.TitleImage} alt="Movie Logo" className={styles.logo} />
          <div className={styles.meta}>
            <p>{currentMovie.ReleaseYear}</p>
            <p>{currentMovie.MpaRating}</p>
            <p>{formatDuration(currentMovie.Duration)}</p> 
          </div>
          <p className={styles.description}>{currentMovie.Description}</p>
          <div className={styles.buttons}>
            <button onClick={handlePlay} className={styles.play}>▶ Play</button>
            <button className={styles.info}>More Info</button>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className={styles.videoModal}>
          <button className={styles.closeButton} onClick={handleClose}>✖</button>
          <video className={styles.videoPlayer} controls autoPlay>
            <source src={currentMovie.VideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
