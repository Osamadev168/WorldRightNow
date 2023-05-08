import "./App.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider from "./Context/Context.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import FooterContainer from "./Home/FooterContainer.jsx";
import Blog from "./Blog/Blog.jsx";
import EditBlog from "./Blog/EditBlog";
import { lazy, useEffect, useState } from "react";
const CreateBlog = lazy(() => import("./Create Blog/CreateBlog.jsx"));
import BlogTag from "./Blog/BlogTag";
import AllBlogs from "./All Blogs/AllBlogs";
import Dashboard from "./Dashboards/Dashboard";
import { Helmet } from "react-helmet";
import Contact from "./Contact us/contact";
import Privacy from "./Privacy&Terms/Privacy";
import Terms from "./Privacy&Terms/Terms";
import WriteForUs from "./Privacy&Terms/Writeforus";
import AboutUs from "./Privacy&Terms/AboutUs";
import Rss from "./RSS/Rss";
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>HubbleFeed</title>
          <link rel="canonical" href="https://www.hubblefeed.com" />
        </Helmet>

        <Header />
        <Routes>
          <Route
            path="*"
            element={
              <>
                <InValidRoute />
                <Footer />
              </>
            }
          />
          <Route path="/rss" element={<Rss />} />

          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />

          <Route
            path="/createblog"
            element={
              <ProtectedRoutes>
                <CreateBlog />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/blog/edit/:blogid"
            element={
              <ProtectedRoutes>
                <EditBlog />
                <Footer />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/:category/:title/:_id"
            element={
              <>
                <Blog />
                <FooterContainer />
              </>
            }
          />
          <Route
            path="/blog/:tags"
            element={
              <>
                <BlogTag />
                <FooterContainer />
              </>
            }
          />

          <Route
            path="/all/blogs"
            element={
              <>
                <AllBlogs />
                <FooterContainer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Privacy />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms&conditions"
            element={
              <>
                <Terms />
                <Footer />
              </>
            }
          />
          <Route
            path="/write-for-us"
            element={
              <>
                <WriteForUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};
export default App;
