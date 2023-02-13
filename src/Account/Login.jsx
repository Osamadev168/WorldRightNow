import { useState } from "react";
import fbicon from "../../assets/facebookicon.png";
import googleicon from "../../assets/googleicon.png";
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
  user,
}) => {
  const navigate = useNavigate();
  const createAccountwithEmailandPassword = () => {
    if (password === confirmpassword) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(userCredential.user);
          navigate("/");
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
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="mainLoginContainer">
      <div className="loginText">
        <h1>Sign up</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input className="input" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="email">
          <label>Password</label>
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="email">
          <label>Confirm Password</label>
          <input
            className="input"
            type="password"
            onChange={(e) => setconfrimPassword(e.target.value)}
          />
        </div>

        <div
          className="loginButton"
          onClick={createAccountwithEmailandPassword}
        >
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
    <div className="mainLoginContainer">
      <div className="loginText">
        <h1>Log in</h1>
      </div>
      <div className="formContainer">
        <div className="email">
          <label>Email</label>
          <input className="input" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="email">
          <label>Password</label>
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={resetPassword}>
            <h1 className="forgetPassword">Forget password?</h1>
          </div>
        </div>

        <div className="loginButton" onClick={loginwithEmailPassword}>
          <h1>Login</h1>
        </div>
        <h1 className="or">OR</h1>
        <div className="facebookButton" onClick={loginwithFacebook}>
          <img src={fbicon} />
          <h1>Continue with Facebook</h1>
        </div>
        <div className="facebookButton" onClick={loginwithGoogle}>
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
    </div>
  );
};

export default Account;
