import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider from "./Context/Context.jsx";
import CreateBlog from "./Create Blog/CreateBlog.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import FooterContainer from "./Home/FooterContainer.jsx";
import UserDashboard from "./Dashboards/UserDashboard.jsx";
import Blog from "./Blog/Blog.jsx";
import Wrapper from "./Home/Wrapper.jsx";
import UserInfo from "./Account/UserInfo.jsx";
import AdminDashboard from "../src/Dashboards/AdminDashboard";
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
            path="/account/info/user"
            element={
              <Wrapper>
                <Header />
                <UserInfo />
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
          <Route
            path="/dashboard/user/:authorId"
            element={
              <Wrapper>
                <Header />
                <UserDashboard />
                <Footer />
              </Wrapper>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <Wrapper>
                <Header />
                <AdminDashboard />
                <Footer />
              </Wrapper>
            }
          />
          <Route
            path="/blogs/blog/:_id"
            element={
              <Wrapper>
                <Header />
                <Blog />
                <FooterContainer />
              </Wrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};
export default App;
