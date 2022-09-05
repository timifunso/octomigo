import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
