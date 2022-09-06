import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}></div>
      <div className={styles.heading}>Oops!</div>
      <div className={styles.description}>
        Sorry, I couldn't find the Github User. Please check if you got the
        username wrong
      </div>
      <Link to="/" className={styles.link}>
        Try Again
      </Link>
    </div>
  );
}

export default NotFound;
