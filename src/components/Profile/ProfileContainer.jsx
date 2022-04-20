import { useEffect, useState } from "react";
import ReposContainer from "../Repos/ReposContainer";
// import Wrapper from "../Wrapper";
import ProfileContainerStyled from "./ProfileContainer.styled";

function ProfileContainer({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userRepos, setUserRepos] = useState([]);
  const {
    avatar_url,
    bio,
    followers,
    following,
    node_id,
    name,
    login,
    public_repos,
    repos_url,
    created_at,
  } = data;

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((res) => res.json())
      .then((data) => setUserRepos(data))
      .then(() => setIsLoading(false))
      //   .then(() => console.log(userRepos))
      .catch((error) => console.log(error));
  }, []);

  //   console.log(data);

  return (
    <section>
      <header>
        <ProfileContainerStyled>
          <img src={avatar_url} alt="" />
          <div className="details">
            <h2>{name}</h2>
            <span>@{login}</span>
            <div className="bottom">
              <div>
                {public_repos} <span>Respositories</span>
              </div>
              <div>
                {followers} <span>Following</span>
              </div>
              <div>
                {following} <span>Following</span>
              </div>
            </div>
          </div>
        </ProfileContainerStyled>
      </header>
      <div>Joined {created_at}</div>
      <ReposContainer data={userRepos} />
    </section>
  );
}

export default ProfileContainer;
