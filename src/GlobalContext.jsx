import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <GlobalContext.Provider value={{ setUsername, username }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
