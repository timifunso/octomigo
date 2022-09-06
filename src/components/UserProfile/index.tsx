import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";

interface UserProfileInterface {
  user: any;
  data: any;
}

function UserProfile({ data, user }: UserProfileInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.account}>{user.login}</div>
      <div className={styles.account}>No of repos is {data.length}</div>
      <div className={styles.account}></div>
      <div className={styles.account}></div>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}

export default UserProfile;
