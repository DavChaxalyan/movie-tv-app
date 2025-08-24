import styles from './Sidebar.module.css';

export default function MenuItem({ icon, label, isActive, isOpen, onClick }) {
  return (
    <div
      className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className={styles.icon} />
      {isOpen && <span className={styles.label}>{label}</span>}
    </div>
  );
}
