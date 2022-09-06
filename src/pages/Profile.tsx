import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type response = "PENDING" | "SUCCESS" | "ERROR" | "NOT_FOUND";

function Profile() {
  const params = useParams();
  const username = params.username;
  const [userProfile, setUserProfile] = useState<any>(null);
  const [userRepositories, setUserRepositories] = useState<any>(null);
  const [responseState, setResponseState] = useState<response>("PENDING");

  async function fetchUserProfile() {
    try {
      let res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) return await res.json();
      setResponseState("NOT_FOUND");
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchUserRepos(url: string) {
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchPageData() {
    setResponseState("PENDING");
    try {
      let profileData = await fetchUserProfile();
      let reposData = await fetchUserRepos(profileData.repos_url);
      setUserProfile(profileData);
      setUserRepositories(reposData);
      setResponseState("SUCCESS");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchPageData();
  }, []);

  if (responseState === "PENDING") return <p>Loading</p>;
  if (responseState === "ERROR") return <h1>There was an error</h1>;
  if (responseState === "NOT_FOUND") return <h1>Not found</h1>;

  return (
    <div>
      <div>Github user is {userProfile.login}</div>
      <div>No of Repos {userRepositories.length}</div>
    </div>
  );
}

export default Profile;
