import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  async function fetchuser() {
    try {
      const fetchData = await fetch("https://api.github.com/users/defunkt");

      const res = await fetchData.json();

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // fetchuser();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
