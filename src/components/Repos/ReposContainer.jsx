import RepoItem from "./RepoItem";
import Wrapper from "../Wrapper";
import RepoContainerStyled from "./RepoContainer.styled";

function ReposContainer({ data }) {
  return (
    <Wrapper>
      <h2 className="section-h">Repositories</h2>
      <RepoContainerStyled>
        {data.map((repo) => (
          <RepoItem data={repo} />
        ))}
      </RepoContainerStyled>
    </Wrapper>
  );
}

export default ReposContainer;
