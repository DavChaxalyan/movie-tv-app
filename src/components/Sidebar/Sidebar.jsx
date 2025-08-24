import { useState } from 'react';
import styles from './Sidebar.module.css';
import searchIcon from '/assets/icons/Search.webp';
import homeIcon from '/assets/icons/home.webp';
import tvShows from '/assets/icons/tv-shows.webp';
import movies from '/assets/icons/movies.webp';
import genres from '/assets/icons/genres.webp';
import watchLater from '/assets/icons/watchLater.webp';
import MenuItem from './MenuItem';
import AvatarSection from './AvatarSection';

const menuItems = [
  { icon: searchIcon, label: 'Search' },
  { icon: homeIcon, label: 'Home' },
  { icon: tvShows, label: 'TV Shows' },
  { icon: movies, label: 'Movies' },
  { icon: genres, label: 'Genres' },
  { icon: watchLater, label: 'Watch Later' }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const handleMenuChange = (label) => setActiveItem(label);

  return (
    <>
      <div className={`${isOpen ? styles.pageBackground : styles.nonPageBackground}`} />
      
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.menu}>
          <AvatarSection />
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.label}
              isOpen={isOpen}
              onClick={() => handleMenuChange(item.label)}
            />
          ))}
        </div>

        <div className={styles.bottomMenu}>
          <span className={styles.bottomText}>language</span>
          <span className={styles.bottomText}>get help</span>
          <span className={styles.bottomText}>exit</span>
        </div>
      </div>
    </>
  );
}
