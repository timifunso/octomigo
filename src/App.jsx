import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [username, setUsername] = useState("");

  async function fetchuser() {
    try {
      const fetchData = await fetch(`https://api.github.com/users/${username}`);
      const res = await fetchData.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // fetchuser();
  }, [username]);

  return (
    <>
      <GlobalStyles />
      {/* <Wrapper>
        <SearchBar />
        <Profile></Profile>
      </Wrapper> */}
      <h1>Octomigo</h1>
    </>
  );
}

export default App;
