import { useState } from "react";
import fbicon from "../../assets/facebookicon.svg";
import googleicon from "../../assets/googleicon.svg";
import Footer from "../Home/Footer.jsx";
import Header from "../Home/Header";
import "../App.css";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
export const Signup = ({
  setActive,
  email,
  password,
  confirmpassword,
  setEmail,
  setPassword,
  setconfrimPassword,
}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const createAccountwithEmailandPassword = () => {
    if (password === confirmpassword) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: userName,
          });

          navigate("/account/info/user");
          sendEmailVerification(userCredential.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("passwords didnt match");
    }
  };

  const loginwithFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const loginwithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="mainLoginContainer paddingtop">
      <div className="loginText">
        <h1>Sign up</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@domain.com"
          />
        </div>
        <div className="email">
          <label>Username</label>
          <input
            className="input"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="text"
            placeholder="Username"
          />
        </div>

        <div className="email">
          <label>Password</label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
            minlength="8"
            placeholder="Enter your password"
          />
        </div>
        <div className="email">
          <label>Confirm Password</label>
          <input
            className="input"
            onChange={(e) => setconfrimPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            required
            minlength="8"
            placeholder="Confirm your password"
          />
        </div>

        <div
          className="primaryButton loginButton"
          onClick={createAccountwithEmailandPassword}
        >
          <h1>Sign Up</h1>
        </div>
        <div className="or">
          <div className="orline"></div>
          <p>OR</p>
          <div className="orline"></div>
        </div>
        <div className="facebookButton" onClick={loginwithFacebook}>
          <img src={fbicon} />
          <a>Continue with Facebook</a>
        </div>
        <div className="facebookButton" onClick={loginwithGoogle}>
          <img src={googleicon} />
          <a>Continue with Google</a>
        </div>
        <div className="loginsignuptoggle">
          <a className="signupaccount">Already have an account? &nbsp;</a>
          <a
            className="signuptext"
            onClick={() => setActive("login")}
            style={{ textDecoration: "underline" }}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
export const Account = () => {
  const [active, setActive] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfrimPassword] = useState("");
  return (
    <>
      {active === "login" ? (
        <Login
          setActive={setActive}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      ) : (
        <Signup
          setActive={setActive}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmpassword={confirmpassword}
          setconfrimPassword={setconfrimPassword}
        />
      )}
    </>
  );
};
export const Login = ({
  setActive,
  setEmail,
  setPassword,
  email,
  password,
}) => {
  const navigate = useNavigate();
  const loginwithEmailPassword = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const loginwithFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const loginwithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        navigate("/");
        console.log(userCredential);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const resetPassword = async () => {
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
  };
  return (
    <div className="mainLoginContainer paddingtop">
      <div className="loginText">
        <h1>Log in</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@domain.com"
          />
        </div>
        <div className="email">
          <label>Password</label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
            minlength="8"
            placeholder="Enter your password"
          />
          <div onClick={resetPassword}>
            <h1 className="forgetPassword">Forget password?</h1>
          </div>
        </div>
        <div
          className="primaryButton loginButton"
          onClick={loginwithEmailPassword}
        >
          <h1>Login</h1>
        </div>
        <div className="or">
          <div className="orline"></div>
          <p>OR</p>
          <div className="orline"></div>
        </div>{" "}
        <div className="facebookButton" onClick={loginwithFacebook}>
          <img src={fbicon} />
          <a>Continue with Facebook</a>
        </div>
        <div className="facebookButton" onClick={loginwithGoogle}>
          <img src={googleicon} />
          <a>Continue with Google</a>
        </div>
        <div className="loginsignuptoggle">
          <a className="signupaccount">Don't have an account? &nbsp;</a>
          <a
            className="signuptext"
            onClick={() => setActive("singup")}
            style={{ textDecoration: "underline" }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Account;
