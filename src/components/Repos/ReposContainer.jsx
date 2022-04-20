import RepoItem from "./RepoItem";
import Wrapper from "../Wrapper";
import RepoContainerStyled from "./RepoContainer.styled";

function ReposContainer({ data }) {
  // const {description,forks_count, language, name, watchers_count, stargazers_count, url} = data;

  return (
    <Wrapper>
      <RepoContainerStyled>
        {data.map((repo) => (
          // <div>
          //   <h5>{repo.name}</h5>
          //   <p>{repo.description}</p>
          // </div>
          <RepoItem data={repo} />
        ))}
      </RepoContainerStyled>
    </Wrapper>
  );
}

export default ReposContainer;
