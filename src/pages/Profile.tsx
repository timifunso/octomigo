import { useState } from "react";
import { useParams } from "react-router-dom";

type response = "PENDING" | "SUCCESS" | "ERROR";

function Profile() {
  const params = useParams();
  const username = params.username;
  const [responseState, setResponseState] = useState<response>("PENDING");

  return <h1>User is {username}</h1>;
}

export default Profile;
