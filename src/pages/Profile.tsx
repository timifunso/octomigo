import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader, Error, UserProfile } from "../components";

export type response = "PENDING" | "SUCCESS" | "ERROR";

function Profile() {
  const params = useParams();
  const username = params.username;
  const [userProfile, setUserProfile] = useState<any>(null);
  const [userRepositories, setUserRepositories] = useState<any>(null);
  const [responseState, setResponseState] = useState<response>("PENDING");

  async function fetchUserProfile() {
    try {
      let res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok && res.status < 400) {
        let data = await res.json();
        setUserProfile(data);
        setResponseState("SUCCESS");
        console.log(data);
        return data;
      }
      setResponseState("ERROR");
    } catch (e) {
      setResponseState("ERROR");
      console.log(e);
    }
  }

  async function fetchUserRepos() {
    try {
      let res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (res.ok && res.status < 400) {
        let data = await res.json();
        setUserRepositories(data);
        console.log(data);
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchPageData() {
    setResponseState("PENDING");
    try {
      await fetchUserProfile();
      await fetchUserRepos();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchPageData();
  }, []);

  if (responseState === "PENDING") return <Loader />;
  if (responseState === "ERROR") return <Error />;

  return <UserProfile user={userProfile} data={userRepositories} />;
}

export default Profile;
