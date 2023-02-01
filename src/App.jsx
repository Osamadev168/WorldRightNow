import Home from "./Home/Home.jsx";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
