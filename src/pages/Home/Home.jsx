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
      <div className={styles.mainContent} style={{ backgroundImage: `url(/assets/images/${currentMovie.CoverImage})` }}>
        <FeaturedMovie />
        <TrendingCarousel />
      </div>
    </div>
  );
}
