import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const username = params.username;

  return <h1>User is {username}</h1>;
}

export default Profile;
