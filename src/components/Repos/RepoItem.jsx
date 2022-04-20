import RepoItemStyled from "./RepoItem.styled";

function RepoItem({ data }) {
  return (
    <RepoItemStyled>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        <div className="container">
          <div className="top">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>
          <div className="bottom">
            <div>{data.language}</div>
            <div>{data.stargazers_count} stars</div>
            <div>{data.forks_count} forks</div>
            <div>{data.size} KB</div>
          </div>
        </div>
      </a>
    </RepoItemStyled>
  );
}

export default RepoItem;
