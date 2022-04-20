import { useEffect, useState } from "react";
import ReposContainer from "../Repos/ReposContainer";
import ProfileContainerStyled from "./ProfileContainer.styled";

function ProfileContainer({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userRepos, setUserRepos] = useState([]);
  const {
    avatar_url,
    bio,
    followers,
    following,
    name,
    login,
    public_repos,
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

  return (
    <section>
      <header>
        <ProfileContainerStyled>
          <img src={avatar_url} alt="" />
          <div className="details">
            <h2>{name}</h2>
            <span>@{login}</span>
            {bio && <p className="w-md">{bio}</p>}
            <div className="flex w-md">
              <div>
                <span>{public_repos} </span>
                <span>Respositories</span>
              </div>
              <div>
                <span>{followers} </span>
                <span>Following</span>
              </div>
              <div>
                <span>{following} </span>
                <span>Following</span>
              </div>
            </div>
          </div>
        </ProfileContainerStyled>
      </header>
      <div>Joined {created_at}</div>
      {!isLoading && <ReposContainer data={userRepos} />}
    </section>
  );
}

export default ProfileContainer;
