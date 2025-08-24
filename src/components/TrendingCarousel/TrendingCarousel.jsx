import { useContext, useState } from 'react';
import { FilmContext } from '../../contexts/FilmContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './TrendingCarousel.module.css';
import { useTrendingMovies } from '../../hooks/useTrendingMovies';
import Spinner from '../Spinner/Spinner';

export default function TrendingCarousel() {
    const { currentMovie } = useContext(FilmContext);
    const { updateCurrentMovie } = useContext(FilmContext);
    const { movies, loading, error } = useTrendingMovies();
    const [loadingMovieId, setLoadingMovieId] = useState(null);

    const handleClick = (movie) => {
        if (currentMovie.Id === movie.Id) return;
        setLoadingMovieId(movie.Id);
        setTimeout(() => {
            updateCurrentMovie(movie);
            setLoadingMovieId(null);
        }, 2000);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading movies.</div>;

    return (
        <>
            <Spinner loadingMovieId={loadingMovieId} />
            <div className={styles.carousel}>
                <h2>Trending Now</h2>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    grabCursor={true}
                >
                    {movies.map((movie) => (
                        
                        <SwiperSlide key={movie.Id} className={styles.swiperSlide}>
                            <div
                            className={styles.card}
                            onClick={() => handleClick(movie)}
                            title={movie.Title}
                            >
                                <img
                                    src={`/assets/images/${movie.CoverImage}`}
                                    alt={movie.Title}
                                />
                            </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
