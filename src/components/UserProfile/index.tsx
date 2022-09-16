import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import { Location, Calendar, Graph, User, Book1 } from "iconsax-react";

interface UserProfileInterface {
  user: any;
  data: any;
}

function UserProfile({ data, user }: UserProfileInterface) {
  return (
    <div className={styles.app}>
      <div className={styles.user}>
        <div className={styles.header}>
          <Link to="/">Back</Link>
          <div>Profile</div>
          <a href="#">Menu</a>
        </div>
        <div className={styles.container}>
          <div className={styles.thumbnail}>
            {/* <img src={user?.avatar_url} alt="User's Profile Photo" /> */}
          </div>
          <div className={styles.name}>{user?.name}</div>
          <div className={styles.username}>@{user?.login}</div>
          {user?.location && (
            <div className={styles.location}>
              <Location size={16} />
              {user?.location}
            </div>
          )}
          {/* <div>{new Date(`${user?.created_at}`).toLocaleDateString()}</div> */}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.number}>{user?.following}</div>
                <div className={styles.text}>Following</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.number}>{user.followers}</div>
                <div className={styles.text}>Followers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.number}>{user?.public_repos}</div>
                <div className={styles.text}>Repositories</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Repositories</div>
            <ul className={styles.repos}>
              {data?.map((repo: any) => (
                <li className={styles.repo} key={repo?.id}>
                  <a
                    href={`https://${repo?.html_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repo__name}
                  >
                    {repo?.name}
                  </a>
                  <div className={styles.repo__description}>
                    {repo?.description}
                  </div>
                  <div className={styles.repo__stats}>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Stars</div>
                      <div className={styles.number}>
                        {repo?.stargazers_count}
                      </div>
                    </div>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Forks</div>
                      <div className={styles.number}>{repo?.forks_count}</div>
                    </div>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Watchers</div>
                      <div className={styles.number}>
                        {repo?.watchers_count}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.app}>
    //     <div className={styles.details}>
    //       <div className={styles.header}>
    //         <User size={20} className={styles.header__icon} />
    //         Profile
    //       </div>
    //       <div className={styles.details__container}>
    //         <div className={styles.thumbnail}>
    //           <img src={user.avatar_url} alt="User's Profile Photo" />
    //         </div>
    //         <div className={styles.name}>{user?.name}</div>
    //         <a
    //           href={`https://github.com/${user?.login}`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={styles.username}
    //         >
    //           @{user?.login}
    //         </a>
    //         <div className={styles.bio}>{user?.bio}</div>
    //         <div className={styles.location}>
    //           <Location size={16} /> {user?.location}
    //         </div>
    //         {/* <div className={styles.company}>{user?.company}</div> */}
    //         <div className={styles.anniversary}>
    //           <Calendar size={16} />
    //           Joined at
    //           <span>
    //             {new Date(`${user?.created_at}`).toLocaleDateString()}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.stats}>
    //       <div className={styles.header}>
    //         <Graph size={20} className={styles.header__icon} />
    //         Stats
    //       </div>
    //       <div className={styles.stats__container}>
    //         <div className={styles.stat__box}>
    //           <div className={styles.stat__title}>Followers</div>
    //           <div className={styles.stat__content}>{user?.followers}</div>
    //         </div>
    //         <div className={styles.stat__box}>
    //           <div className={styles.stat__title}>Following</div>
    //           <div className={styles.stat__content}>{user?.following}</div>
    //         </div>
    //         <div className={styles.stat__box}>
    //           <div className={styles.stat__title}>Website / Blog</div>
    //           <a
    //             href={user?.blog}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={styles.stat__link}
    //           >
    //             {user?.blog}
    //           </a>
    //         </div>

    //         <a
    //           href={`http://twitter.com/${user.twitter_username}`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={styles.profile__link}
    //         >
    //           Follow on Twitter
    //         </a>
    //       </div>
    //     </div>
    //     <div className={styles.styles.repos}>
    //       <div className={styles.header}>
    //         <Book1 size={20} className={styles.header__icon} />
    //         Repositories <span>{user?.public_repos}</span>
    //       </div>
    //       <ul className={styles.repos__list}>
    //         {data?.map((repo: any) => (
    //           <li className={styles.repo__item} key={repo?.id}>
    //             <div className={styles.item__header}>
    //               <a
    //                 href={`https://${repo?.html_url}`}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 {repo?.name}
    //               </a>
    //             </div>
    //             <div className={styles.item__description}>
    //               {repo?.description?.length > 64
    //                 ? repo?.description?.slice(0, 64)
    //                 : repo?.description}
    //             </div>
    //             <div className={styles.item__stats}>
    //               <div className={styles.item__stat}>
    //                 <small>Stars</small>
    //                 <div>{repo?.stargazers_count}</div>
    //               </div>

    //               <div className={styles.item__stat}>
    //                 <small>Watchers</small>
    //                 <div>{repo?.watchers_count}</div>
    //               </div>

    //               <div className={styles.item__stat}>
    //                 <small>forks</small>
    //                 <div>{repo?.forks_count}</div>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <footer className={styles.footer}>
    //     <Link to="/">Octomiggo</Link>
    //   </footer>
    // </div>
  );
}

export default UserProfile;
