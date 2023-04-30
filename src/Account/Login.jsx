import { useState } from "react";
import fbicon from "../../assets/facebookicon.svg";
import googleicon from "../../assets/googleicon.svg";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Context/Context";

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
  const [laoding, setLoading] = useState(false);
  const createAccountwithEmailandPassword = () => {
    setLoading(true);
    if (password === confirmpassword) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: userName,
          });
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);
        });
    } else {
      alert("passwords didnt match");
      setLoading(false);
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
          <label htmlFor="email">Email</label>
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@domain.com"
            id="email"
          />
        </div>
        <div className="email">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="name"
            placeholder="Username"
            id="username"
          />
        </div>

        <div className="email">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
            minlength="8"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="email">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input"
            onChange={(e) => setconfrimPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            required
            minlength="8"
            placeholder="Confirm your password"
            id="confirmPassword"
          />
        </div>

        <button
          className="primaryButton loginButton"
          onClick={createAccountwithEmailandPassword}
          type="submit"
        >
          {laoding ? <span className="loader"></span> : "Sign up"}
        </button>
        <div className="or">
          <div className="orline"></div>
          <p>OR</p>
          <div className="orline"></div>
        </div>
        <button
          className="facebookButton"
          onClick={loginwithFacebook}
          type="button"
        >
          <img src={fbicon} />
          Continue with Facebook
        </button>
        <button
          className="facebookButton"
          onClick={loginwithGoogle}
          type="button"
        >
          <img src={googleicon} />
          Continue with Google
        </button>
        <div className="loginsignuptoggle">
          <p className="signupaccount">Already have an account? &nbsp;</p>
          <button
            className="signuptext"
            onClick={() => setActive("login")}
            style={{ textDecoration: "underline" }}
            type="button"
          >
            Login
          </button>
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
  const { token } = useContext(UserContext);
  const isAdmin = async () => {
    await axios
      .post("http://localhost:7000/admin", { idToken: token })
      .then(async (res) => {
        localStorage.setItem("admin", res.data.isAdmin);
        console.log(res);
      });
  };
  document.title = active === "login" ? "Login" : "Sign up";

  return (
    <>
      {active === "login" ? (
        <Login
          setActive={setActive}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isAdmin={isAdmin}
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginwithEmailPassword = async () => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };
  const loginwithFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(
      auth,
      provider.setCustomParameters({
        prompt: "select_account",
      })
    )
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
    signInWithPopup(
      auth,
      provider.setCustomParameters({
        prompt: "select_account",
      })
    )
      .then((userCredential) => {
        navigate("/");
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
          <label htmlFor="email">Email</label>
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@domain.com"
            id="email"
          />
        </div>
        <div className="email">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
            minlength="8"
            placeholder="Enter your password"
            id="password"
          />
          <button
            onClick={resetPassword}
            className="forgetPassword"
            type="button"
          >
            Forgot password?
          </button>
        </div>
        <button
          className="primaryButton loginButton"
          onClick={loginwithEmailPassword}
          type="submit"
        >
          {loading ? <span className="loader"></span> : "Login"}
        </button>
        <div className="or">
          <div className="orline"></div>
          <p>OR</p>
          <div className="orline"></div>
        </div>{" "}
        <button
          className="facebookButton"
          onClick={loginwithFacebook}
          type="button"
        >
          <img src={fbicon} />
          Continue with Facebook
        </button>
        <button
          className="facebookButton"
          onClick={loginwithGoogle}
          type="button"
        >
          <img src={googleicon} />
          Continue with Google
        </button>
        <div className="loginsignuptoggle">
          <p className="signupaccount">Don't have an account? &nbsp;</p>
          <button
            className="signuptext"
            onClick={() => setActive("singup")}
            style={{ textDecoration: "underline" }}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
