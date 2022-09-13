import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import { Location, Calendar, Graph, User, Book1 } from "iconsax-react";

interface UserProfileInterface {
  user: any;
  data: any;
}

function UserProfile({ data, user }: UserProfileInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.details}>
          <div className={styles.header}>
            <User size={20} className={styles.header__icon} />
            Profile
          </div>
          <div className={styles.details__container}>
            <div className={styles.thumbnail}>
              <img src={user.avatar_url} alt="User's Profile Photo" />
            </div>
            <div className={styles.name}>{user?.name}</div>
            <a
              href={`https://github.com/${user?.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.username}
            >
              @{user?.login}
            </a>
            <div className={styles.bio}>{user?.bio}</div>
            <div className={styles.location}>
              <Location size={16} /> {user?.location}
            </div>
            {/* <div className={styles.company}>{user?.company}</div> */}
            <div className={styles.anniversary}>
              <Calendar size={16} />
              Joined at
              <span>
                {new Date(`${user?.created_at}`).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.header}>
            <Graph size={20} className={styles.header__icon} />
            Stats
          </div>
          <div className={styles.stats__container}>
            <div className={styles.stat__box}>
              <div className={styles.stat__title}>Followers</div>
              <div className={styles.stat__content}>{user?.followers}</div>
            </div>
            <div className={styles.stat__box}>
              <div className={styles.stat__title}>Following</div>
              <div className={styles.stat__content}>{user?.following}</div>
            </div>
            <div className={styles.stat__box}>
              <div className={styles.stat__title}>Website / Blog</div>
              <a
                href={user?.blog}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.stat__link}
              >
                {user?.blog}
              </a>
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
            <Book1 size={20} className={styles.header__icon} />
            Repositories <span>{user?.public_repos}</span>
          </div>
          <ul className={styles.repos__list}>
            {data?.map((repo: any) => (
              <li className={styles.repo__item} key={repo?.id}>
                <div className={styles.item__header}>
                  <a
                    href={`https://${repo?.html_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo?.name}
                  </a>
                </div>
                <div className={styles.item__description}>
                  {repo?.description?.length > 64
                    ? repo?.description?.slice(0, 64)
                    : repo?.description}
                </div>
                <div className={styles.item__stats}>
                  <div className={styles.item__stat}>
                    <small>Stars</small>
                    <div>{repo?.stargazers_count}</div>
                  </div>

                  <div className={styles.item__stat}>
                    <small>Watchers</small>
                    <div>{repo?.watchers_count}</div>
                  </div>

                  <div className={styles.item__stat}>
                    <small>forks</small>
                    <div>{repo?.forks_count}</div>
                  </div>
                </div>
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
