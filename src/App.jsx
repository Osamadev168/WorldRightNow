import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Account/Login.jsx";
import ContextProvider, { UserContext } from "./Context/Context.jsx";
import CreateBlog from "./Create Blog/CreateBlog.jsx";
import Header from "./Home/Header.jsx";
import Footer from "./Home/Footer.jsx";
import FooterContainer from "./Home/FooterContainer.jsx";
import UserDashboard from "./Dashboards/UserDashboard.jsx";
import Blog from "./Blog/Blog.jsx";
import Wrapper from "./Home/Wrapper.jsx";
import UserInfo from "./Account/UserInfo.jsx";
import AdminDashboard from "../src/Dashboards/AdminDashboard";
import { useContext } from "react";
const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace />;
  } else if (loading) {
    return children;
  } else if (user !== null) {
    return children;
  } else if (user && user.uid !== "Idfri64OkLcihU4YP5j2hvC14M32") {
    return children;
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
            path="/dashboard/admin"
            element={
              <ProtectedRoutes>
                <Wrapper>
                  <Header />
                  <AdminDashboard />
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
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};
export default App;
