function ReposContainer({ data }) {
  // const {description,forks_count, language, name, watchers_count, stargazers_count, url} = data;

  return (
    <div>
      {data.map((repo) => (
        <div>
          <h5>{repo.name}</h5>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ReposContainer;
