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
          <div className={styles.details__container}>
            <div className={styles.thumbnail}>
              <img src={user.avatar_url} alt="User's Profile Photo" />
            </div>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.username}>@{user.login}</div>
            <div className={styles.bio}>{user.bio}</div>
            <div className={styles.location}>{user.location}</div>
            <div className={styles.company}>{user.company}</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.header}>Stats</div>
          <div className={styles.stats__container}>
            <div className={styles.stat__box}>
              <small className={styles.stat__title}>Followers</small>
              <div className={styles.stat__content}>{user.followers}</div>
            </div>
            <div className={styles.stat__box}>
              <small className={styles.stat__title}>Following</small>
              <div className={styles.stat__content}>{user.following}</div>
            </div>
            <div className={styles.stat__box}>
              <small className={styles.stat__title}>Website/Blog</small>
              <div className={styles.stat__content}>{user.blog}</div>
            </div>

            <a
              href={`http://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profile__link}
            >
              Follow on Twitter
            </a>
          </div>
        </div>
        <div className={styles.repos}>
          <div className={styles.header}>
            Repositories <span>{user.public_repos}</span>
          </div>
          <ul className={styles.repos__list}>
            {data.map((repo: any) => (
              <li className={styles.repo__item} key={repo.id}>
                {repo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <Link to="/">Octomiggo</Link>
      </footer>
    </div>
  );
}

export default UserProfile;
