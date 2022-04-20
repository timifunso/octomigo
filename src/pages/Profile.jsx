import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import ProfileContainer from "../components/Profile/ProfileContainer";

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

  return <>{!isLoading && <ProfileContainer data={userProfile} />}</>;
}

export default Profile;
