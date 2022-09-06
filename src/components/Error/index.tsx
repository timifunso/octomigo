import styles from "../NotFound/NotFound.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}></div>
      <div className={styles.heading}>Oops!</div>
      <div className={styles.description}>
        Sorry, an error occurred while fetching this Github user. Please check
        your network connection and try again
      </div>
      <Link to="/" className={styles.link}>
        Try Again
      </Link>
    </div>
  );
}

export default Error;
