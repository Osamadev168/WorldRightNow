import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../Context/Context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase/Config";
import profilepic from "../../assets/profilepic.jpg";
import imgDashboard from "../../assets/dashboard.svg";
import imgWrite from "../../assets/write.svg";
import imgHelp from "../../assets/help.svg";
import imgLogout from "../../assets/logout.svg";

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
        <p
          className="logoHeader"
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
          }}
        >
          Logo
        </p>
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
            <a onClick={() => navigate("/blogs")}>Blogs</a>
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
              <div className="profile" ref={profileRef}>
                <div className="picdropdown" onClick={toggleProfile}>
                  <div
                    className="profilepic"
                    style={{
                      backgroundImage: `url(${
                        user ? user.photoURL : profilepic
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
                    <div
                      onClick={() => {
                        user.uid === "Idfri64OkLcihU4YP5j2hvC14M32"
                          ? navigate(`/dashboard/admin/${user.uid}`)
                          : navigate(`/dashboard/user/${user.uid}`);
                      }}
                    >
                      <DropdownItem text={"Dashboard"} image={imgDashboard} />
                    </div>
                    <DropdownItem
                      text={"Create Blog"}
                      image={imgWrite}
                      link={() => navigate("/createblog")}
                    />
                    <DropdownItem text={"Help"} image={imgHelp} />
                    <DropdownItem
                      text={"Logout"}
                      link={() => logout()}
                      image={imgLogout}
                    />
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
      <img src={props.image} />
      <a>{props.text}</a>
    </li>
  );
}
export default Header;
