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
      setRefresh(true);
    });
    navigate("/account");
  };
  useEffect(() => {}, [user, refresh]);
  const [isOpen, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="HeaderMainContainer">
      <div className="div1Header">
        <p className="logoHeader">Logo</p>
        <ul
          className={`div2Header ${isOpen ? "menuOpened" : "menuclosed"}`}
          style={{ listStyle: "none" }}
        >
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>FAQ's</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>
      <div className="div3Header">
        {user && user !== null ? (
          <>
            {/* <p>
              Welcome,{" "}
              {user.displayName === null ? user.email : user.displayName}!
            </p> */}
            <a
              onClick={() => logout()}
              style={{
                cursor: "pointer",
              }}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
              }}
            >
              <a className="secondaryButton headerButton">Login</a>
            </Link>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
              }}
            >
              <a className="primaryButton headerButton">Sign up</a>
            </Link>
          </>
        )}

        <div
          className={`hamburger ${isOpen ? "burgerOpened" : "burgerClosed"}`}
          onClick={toggleHamburger}
        >
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
