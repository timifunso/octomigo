import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";

interface UserProfileInterface {
  user: any;
  data: any;
}

function UserProfile({ data, user }: UserProfileInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.details}>
          <div className={styles.header}>Profile</div>
        </div>
        <div className={styles.account}>
          <div className={styles.header}>Account</div>
        </div>
        <div className={styles.repos}>
          <div className={styles.header}>Repositories</div>
          <ul className={styles.repos__list}>
            <li className={styles.repo__item}></li>
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>Octomiggo</footer>
    </div>
  );
}

export default UserProfile;
