import { useParams } from "react-router-dom";

function Profile() {
  const router = useParams();

  return <h1>User is {router.username}</h1>;
}

export default Profile;
