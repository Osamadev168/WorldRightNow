import Home from "./Home/Home.jsx";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider from "./Context/Context.jsx";
import CreateBlog from "./Create Blog/CreateBlog.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import UserDashboard from "./Dashboards/UserDashboard.jsx";
import Blog from "./Blog/Blog.jsx";
import Wrapper from "./Home/Wrapper.jsx";
const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <Wrapper>
                <Header />
                <Login />
                <Footer />
              </Wrapper>
            }
          />
          <Route
            path="/createblog"
            element={
              <Wrapper>
                <Header />
                <CreateBlog />
                <Footer />
              </Wrapper>
            }
          />
          <Route path="/blogs/user/:authorId" element={<UserDashboard />} />
          <Route
            path="/blogs/blog/:_id"
            element={
              <Wrapper>
                <Header />
                <Blog />
                <Footer />
              </Wrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};
export default App;
