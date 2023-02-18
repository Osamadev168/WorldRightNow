import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../Context/Context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase/Config";
import profilepic from "../../assets/profilepic.jpg";
const Header = ({ children }) => {
  const { user } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(getAuth(app)).then(() => {
      setRefresh(true);
    });
    navigate("/account");
  };
  let profileRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        profileClose(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const [isOpen, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    document.body.classList.toggle("noscroll", isOpen);
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);
  const [profileOpen, profileClose] = useState(false);
  const toggleProfile = () => {
    profileClose(!profileOpen);
  };

  return (
    <div className="HeaderMainContainer">
      <div className="div1Header">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p className="logoHeader">Logo</p>
        </Link>
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
        <div
          className={`accountContainer ${isOpen ? "menuOpened" : "menuclosed"}`}
        >
          {user && user !== null ? (
            <>
              {/* <p>
              Welcome,{" "}
              {user.displayName === null ? user.email : user.displayName}!
            </p> */}
              {/* <a onClick={() => logout()}>Logout</a> */}

              <a
                className="primaryButton headerButton"
                onClick={() => navigate("/createblog")}
              >
                Create blog
              </a>
              <div className="profile" ref={profileRef}>
                <div className="picdropdown" onClick={toggleProfile}>
                  <div
                    className="profilepic"
                    style={{
                      backgroundImage: `url(${
                        user && user !== null ? user.photoURL : profilepic
                      })`,
                    }}
                  ></div>

                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.97184 9.24648C5.76213 9.58451 5.23786 9.58451 5.02816 9.24648L0.0738061 1.26056C-0.135902 0.922535 0.126232 0.499999 0.545648 0.5L10.4544 0.5C10.8738 0.5 11.1359 0.922536 10.9262 1.26056L5.97184 9.24648Z"
                      fill="#322638"
                    />
                  </svg>
                </div>
                <div
                  className={`profiledropdown ${
                    profileOpen ? "profileopened" : "profileclosed"
                  }`}
                >
                  <ul>
                    <div onClick={() => navigate(`/blogs/user/${user.uid}`)}>
                      <DropdownItem text={"Dashboard"} />
                    </div>
                    <DropdownItem text={"Help"} />
                    <DropdownItem text={"Logout"} link={() => logout()} />
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/account"
                style={{
                  textDecoration: "none",
                }}
              >
                <a className="primaryButton headerButton">Sign in</a>
              </Link>
            </>
          )}
        </div>

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
function DropdownItem(props) {
  return (
    <li className="dropdownitem" onClick={props.link}>
      <a>{props.text}</a>
    </li>
  );
}
export default Header;
