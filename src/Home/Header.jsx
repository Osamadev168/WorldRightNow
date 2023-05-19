import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../Context/Context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase/Config";
import profilepic from "../../assets/Avatar.svg";
import imgDashboard from "../../assets/dashboard.svg";
import imgWrite from "../../assets/write.svg";
import imgHelp from "../../assets/help.svg";
import imgLogout from "../../assets/logout.svg";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = ({ headerStyle }) => {
  //Checking if the current page is About us
  const location = useLocation();
  const isAboutUs = location.pathname === "/about-us";

  // Hooks
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
  const [profileOpen, profileClose] = useState(false);
  let profileRef = useRef();
  const navigate = useNavigate();
  ////
  // functions
  const logout = () => {
    signOut(getAuth(app)).then(() => {
      localStorage.removeItem("authUser");
      localStorage.removeItem("admin");
      setUser(null);
    });
    navigate("/account");
  };
  const toggleProfile = () => {
    profileClose(!profileOpen);
  };
  const toggleHamburger = () => {
    setOpen(!isOpen);
  };

  // effect
  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        profileClose(false);
      }
    };
    document.body.classList.toggle("noscroll", isOpen);

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []); // Empty dependency array ensures this runs once on mount and once on unmount

  return (
    <div
      className={`HeaderMainContainer ${isScrolled ? "scrolled" : ""} ${
        isAboutUs && !isScrolled ? "lightHeader" : ""
      }`}
    >
      <div className="headerContainer">
        <div className="div1Header">
          <img
            src={logo}
            alt="logo"
            className="logoHeader"
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
            }}
          />

          <ul
            className={`div2Header ${isOpen ? "menuOpened" : "menuclosed"}`}
            style={{ listStyle: "none" }}
          >
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="div3Header">
          <div
            className={`accountContainer ${
              isOpen ? "menuOpened" : "menuclosed"
            }`}
          >
            {user ? (
              <>
                <div className="profile" ref={profileRef}>
                  <div className="picdropdown" onClick={toggleProfile}>
                    <img
                      referrerPolicy="no-referrer"
                      className="profilepic"
                      src={user.photoURL ? user.photoURL : profilepic}
                      alt="user_image"
                      loading="lazy"
                    />

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
                      <a href="/dashboard">
                        <DropdownItem text={"Dashboard"} image={imgDashboard} />
                      </a>
                      <a href="/createblog">
                        <DropdownItem text={"Create Blog"} image={imgWrite} />
                      </a>
                      <a href="/contact">
                        <DropdownItem text={"Help"} image={imgHelp} />
                      </a>
                      <div onClick={logout}>
                        <DropdownItem text={"Logout"} image={imgLogout} />
                      </div>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <a className="headerButton" href="/account">
                Sign in
              </a>
            )}
          </div>

          <div
            className={`hamburger ${isOpen ? "burgerOpened" : ""}`}
            onClick={toggleHamburger}
          >
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
function DropdownItem(props) {
  return (
    <li className="dropdownitem" onClick={props.link}>
      <img src={props.image} alt="icon" />
      <p>{props.text}</p>
    </li>
  );
}
export default Header;
