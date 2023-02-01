import { useContext, useState } from "react";
import fbicon from "../../assets/facebookicon.png";
import googleicon from "../../assets/googleicon.png";
import Footer from "../Home/Footer.jsx";
import Header from "../Home/Header";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { app } from "../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
export const Signup = ({ setActive }) => {
  const navigate = useNavigate();

  const loginwithFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate("/");
        setUser(user.user);
        console.log(user.user.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const loginwithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate("/");
        console.log(user.user.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="mainLoginContainer">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h1 className="accountLogo">LOGO</h1>
      </Link>
      <div className="loginText">
        <h1>Sign up</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input className="input" />
        </div>
        <div className="email">
          <label>Password</label>
          <input className="input" type="password" />
        </div>
        <div className="email">
          <label>Confirm Password</label>
          <input className="input" type="password" />
        </div>

        <div className="loginButton">
          <h1>Sign Up</h1>
        </div>
        <h1 className="or">OR</h1>
        <div className="facebookButton" onClick={() => loginwithFacebook()}>
          <img src={fbicon} />
          <h1>Continue with Facebook</h1>
        </div>
        <div className="facebookButton" onClick={() => loginwithGoogle()}>
          <img src={googleicon} />
          <h1>Continue with Google</h1>
        </div>
        <div className="loginsignuptoggle">
          <h1 className="signupaccount">Already have an account?</h1>
          <h1 className="signuptext" onClick={() => setActive("login")}>
            Login
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export const Account = () => {
  const [active, setActive] = useState("login");
  return (
    <>
      {active === "login" ? (
        <Login setActive={setActive} />
      ) : (
        <Signup setActive={setActive} />
      )}
    </>
  );
};
export const Login = ({ setActive }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const loginwithFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate("/");
        setUser(user.user);
        console.log(user.user.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const loginwithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate("/");
        console.log(user.user.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="mainLoginContainer">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h1 className="accountLogo">LOGO</h1>
      </Link>
      <div className="loginText">
        <h1>Log in</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input className="input" />
        </div>
        <div className="email">
          <label>Password</label>
          <input className="input" type="password" />
          <div>
            <h1 className="forgetPassword">Forget password?</h1>
          </div>
        </div>

        <div className="loginButton">
          <h1>Login</h1>
        </div>
        <h1 className="or">OR</h1>
        <div className="facebookButton" onClick={() => loginwithFacebook()}>
          <img src={fbicon} />
          <h1>Continue with Facebook</h1>
        </div>
        <div className="facebookButton" onClick={() => loginwithGoogle()}>
          <img src={googleicon} />
          <h1>Continue with Google</h1>
        </div>
        <div className="loginsignuptoggle">
          <h1 className="signupaccount">Don't have an account?</h1>
          <h1 className="signuptext" onClick={() => setActive("singup")}>
            Sign Up
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
