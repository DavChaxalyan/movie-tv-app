import styles from './Sidebar.module.css';
import avatar from '/assets/profile_img/avatar.png';

export default function AvatarSection() {

  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="profile image" />
      <span>Daniel</span>
    </div>
  );
}
