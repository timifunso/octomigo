import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/Wrapper";

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
    <Wrapper>
      <GlobalStyles />
      <SearchBar />
    </Wrapper>
  );
}

export default App;
