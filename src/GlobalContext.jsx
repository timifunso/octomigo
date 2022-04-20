import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
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
    <GlobalContext.Provider value={username}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
