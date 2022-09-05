import { useParams } from "react-router-dom";

function Profile() {
  const router = useParams();
  console.log({ router });

  return <div>User</div>;
}

export default Profile;
