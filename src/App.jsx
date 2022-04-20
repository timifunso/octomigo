import GlobalStyles from "./GlobalStyles";
import { GlobalContextProvider } from "./GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
