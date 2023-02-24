import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider, { UserContext } from "./Context/Context.jsx";
import CreateBlog from "./Create Blog/CreateBlog.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import FooterContainer from "./Home/FooterContainer.jsx";
import UserDashboard from "./Dashboards/UserDashboard.jsx";
import Blog from "./Blog/Blog.jsx";
import EditBlog from "./Blog/EditBlog";
import Wrapper from "./Home/Wrapper.jsx";
import UserInfo from "./Account/UserInfo.jsx";
import AdminDashboard from "../src/Dashboards/AdminDashboard";
import { useContext, useEffect } from "react";
import BlogTag from "./Blog/BlogTag";
import { useState } from "react";
import AllBlogs from "./All Blogs/AllBlogs";

const ProtectedRoutes = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem("authUser")));
  }, []);
  if (!authUser) {
    return <Navigate to="/" replace />;
  } else if (authUser) {
    return children;
  }
  return children;
};
const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user && user.uid !== "Idfri64OkLcihU4YP5j2hvC14M32") {
    return <Navigate to="/" />;
  }
  return children;
};
const InValidRoute = () => {
  return (
    <div>
      <h1>Not found :(</h1>
    </div>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<InValidRoute />} />

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
              <ProtectedRoutes>
                <Wrapper>
                  <Header />
                  <CreateBlog />
                  <Footer />
                </Wrapper>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/blog/edit/:blogid"
            element={
              <ProtectedRoutes>
                <Wrapper>
                  <Header />
                  <EditBlog />
                  <Footer />
                </Wrapper>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard/user/:authorId"
            element={
              <ProtectedRoutes>
                <Wrapper>
                  <Header />
                  <UserDashboard />
                  <Footer />
                </Wrapper>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard/admin/:adminId"
            element={
              <AdminRoute>
                <Wrapper>
                  <Header />
                  <AdminDashboard />
                  <Footer />
                </Wrapper>
              </AdminRoute>
            }
          />
          <Route
            path="/blogs/:title/:_id"
            element={
              <Wrapper>
                <Header />
                <Blog />
                <FooterContainer />
              </Wrapper>
            }
          />
          <Route
            path="/blog/:tags"
            element={
              <Wrapper>
                <Header />
                <BlogTag />
                <FooterContainer />
              </Wrapper>
            }
          />
          <Route
            path="/blogs"
            element={
              <Wrapper>
                <Header />
                <AllBlogs />
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
