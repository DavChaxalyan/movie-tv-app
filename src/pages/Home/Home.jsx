import Sidebar from '../../components/Sidebar/Sidebar';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';
import TrendingCarousel from '../../components/TrendingCarousel/TrendingCarousel';
import styles from './Home.module.css';
import { useContext } from 'react';
import { FilmContext } from '../../contexts/FilmContext';

export default function Home() {
  const { currentMovie } = useContext(FilmContext);
  if (!currentMovie) return null;

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.mainContent} style={{ backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 1) 0%, rgba(138, 138, 138, 0) 100%), url(${currentMovie.BackgroundImage})` }}>
        <FeaturedMovie />
        <TrendingCarousel />
      </div>
    </div>
  );
}
