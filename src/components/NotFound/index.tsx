import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { response } from "../../pages/Profile";

interface ErrorInterface {
  Type: response;
}

function NotFound({ Type }: ErrorInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}></div>
      <div className={styles.heading}>Oops!</div>

      {Type === "ERROR" && (
        <div className={styles.description}>
          Sorry, an error occurred while fetching this Github user. Please try
          again
        </div>
      )}

      {Type === "NOT_FOUND" && (
        <div className={styles.description}>
          Sorry, I couldn't find the Github User. Please check if you got the
          username wrong
        </div>
      )}

      <Link to="/" className={styles.link}>
        Try Again
      </Link>
    </div>
  );
}

export default NotFound;
