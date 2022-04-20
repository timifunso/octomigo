import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

function Profile() {
  const { username } = useContext(GlobalContext);
  const [userProfile, setUserProfile] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserProfile(data))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return <>{!isLoading && <h1>{userProfile.node_id}</h1>}</>;
}

export default Profile;
