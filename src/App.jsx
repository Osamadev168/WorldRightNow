import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider from "./Context/Context.jsx";
import CreateBlog from "./Create Blog/CreateBlog.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import FooterContainer from "./Home/FooterContainer.jsx";
import Blog from "./Blog/Blog.jsx";
import EditBlog from "./Blog/EditBlog";
import Wrapper from "./Home/Wrapper.jsx";
import { useEffect, useState } from "react";
import BlogTag from "./Blog/BlogTag";
import AllBlogs from "./All Blogs/AllBlogs";
import Dashboard from "./Dashboards/Dashboard";
import Blogs from "./Blog/Blogs";
const ProtectedRoutes = ({ children }) => {
  const [authUser, setAuthUser] = useState(localStorage.getItem("authUser"));
  useEffect(() => {
    setAuthUser(localStorage.getItem("authUser"));
  }, []);
  if (!authUser) {
    return <Navigate to="/account" replace />;
  }
  return children;
};
const InValidRoute = () => {
  return (
    <div style={{ margin: 160 }}>
      <h1>Not found :(</h1>
    </div>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Wrapper>
                <Header />
                <InValidRoute />
                <Footer />
              </Wrapper>
            }
          />

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
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Wrapper>
                  <Header />
                  <Dashboard />
                  <Footer />
                </Wrapper>
              </ProtectedRoutes>
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
          <Route
            path="/all/blogs"
            element={
              <Wrapper>
                <Header />
                <Blogs />
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
