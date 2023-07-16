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
import AboutUs from "./Privacy&Terms/AboutUs";
import Rss from "./RSS/Rss";
import Pricing from "./Pricing/pricing";
import FAQ from "./Home/FAQ";
import notFound from "../assets/404.svg";

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
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <img src={notFound} alt="Not Found" style={{ width: "40%" }} />
    </div>
  );
};

const App = () => {
  
  return (
    <ContextProvider>
      <BrowserRouter>
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
                <Helmet>
                  <link href="https://www.hubblefeed.com/account" />
                </Helmet>
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
            path="/blogs"
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
                <Helmet>
                  <title>Contact</title>
                  <link href="https://www.hubblefeed.com/contact" />
                </Helmet>
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
            path="/about-us"
            element={
              <>
                <AboutUs />
                <FooterContainer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Helmet>
                  <title>Pricing</title>
                  <link href="https://www.hubblefeed.com/pricing" />
                </Helmet>
                <Pricing margin={"150px"} />
                <FooterContainer />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Helmet>
                  <title>FAQs</title>
                  <link href="https://www.hubblefeed.com/faq" />
                </Helmet>
                <FAQ data={faqData} margin={"150px"} />
                <FooterContainer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

//FAQ data
const faqData = [
  {
    question: "What is Hubble Feed and how can it help my business?",
    answer:
      "Hubble Feed is a comprehensive blogging solution designed to help businesses and individuals grow their online presence. By providing a platform for creating, managing, and publishing SEO-optimized blogs, Hubble Feed can attract new audiences, increase website traffic, and boost revenue.",
  },
  {
    question: "How can Hubble Feed help attract an audience?",
    answer:
      "Hubble Feed utilizes top-quality, SEO-optimized content to attract new readers and reach your target audience effectively. Our platform also provides the ability to tailor-make solutions to fit your unique content requirements.",
  },
  {
    question: "How does Hubble Feed drive organic growth and engagement?",
    answer:
      "Hubble Feed uses SEO excellence to drive organic growth and engagement. This involves optimizing your blog posts to be easily discovered by search engines, resulting in more traffic to your blog and increased engagement from your audience.",
  },
  {
    question: "What are the custom packages offered by Hubble Feed?",
    answer:
      "Hubble Feed offers custom packages to suit your budget and content requirements. Whether you're a small business or an individual blogger, we have packages that can cater to your unique needs.",
  },
  {
    question: "How user-friendly is the Hubble Feed platform?",
    answer:
      "Hubble Feed has an intuitive interface that makes it easy to create, manage, and publish content. It also offers a personal dashboard where you can monitor all of your published and unpublished blogs.",
  },
];
export default App;
