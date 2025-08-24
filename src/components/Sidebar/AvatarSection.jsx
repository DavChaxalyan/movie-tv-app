import styles from './Sidebar.module.css';
import avatar from '/assets/profile_img/profile_img.webp';

export default function AvatarSection() {

  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="profile image" />
      <span>Daniel</span>
    </div>
  );
}
