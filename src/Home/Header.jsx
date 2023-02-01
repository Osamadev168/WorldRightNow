import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase/Config";
const Header = () => {
  const { user } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(getAuth(app)).then(() => {
      console.log(user);
      setRefresh(true);
    });
    navigate("/account");
  };
  useEffect(() => {}, [user, refresh]);
  return (
    <div className="HeaderMainContainer">
      <div className="div1Header">
        <p className="logoHeader">Logo</p>
        <div className="div2Header">
          <p>About us</p>
          <p>Pricing</p>
          <p>Blogs</p>
          <p>FAQ's</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="div3Header">
        {user && user !== null ? (
          <>
            <p>Welcome, {user.displayName}!</p>
            <p
              onClick={() => logout()}
              style={{
                cursor: "pointer",
              }}
            >
              Logout
            </p>
          </>
        ) : (
          <>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
              }}
            >
              <p>Login</p>
            </Link>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
              }}
            >
              <p>Signup</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
