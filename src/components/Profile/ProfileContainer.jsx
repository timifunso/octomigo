import { useEffect, useState } from "react";
import ReposContainer from "../Repos/ReposContainer";
import ProfileContainerStyled from "./ProfileContainer.styled";
import LineIcon from "react-lineicons";
import { useNavigate } from "react-router-dom";

function ProfileContainer({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userRepos, setUserRepos] = useState([]);
  const navigate = useNavigate();
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
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <header>
        <ProfileContainerStyled>
          <button title="Go back to home" onClick={() => navigate("/")}>
            <LineIcon name="arrow-left" />
          </button>
          <img src={avatar_url} alt="" />
          <div className="details">
            <h2>{name}</h2>
            <span className="fs-md">@{login}</span>
            {bio && <p className="w-md">{bio}</p>}
            <div className="grid w-md">
              <div>
                <span>{public_repos} </span>
                <span>Respositories</span>
              </div>
              <div>
                <span>{followers} </span>
                <span>Followers</span>
              </div>
              <div>
                <span>{following} </span>
                <span>Following</span>
              </div>
            </div>
          </div>
        </ProfileContainerStyled>
      </header>
      {!isLoading && <ReposContainer data={userRepos} />}
    </section>
  );
}

export default ProfileContainer;
