import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Api/Api";
import { UserContext } from "../Context/Context";
const UserInfo = () => {
  const { user } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const refreshUser = () => {
    if (!!user && !user?.emailVerified) {
      setInterval(() => {
        user?.reload().then();
      }, 3000);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user !== null && user.emailVerified === true) {
      navigate("/");
    }
  }, [user && user !== null && user.emailVerified === true]);
  return (
    <div style={{ margin: 100 }}>
      <h3>Welcome {user && user !== null ? user.displayName : ""}</h3>

      <button
        onClick={() => {
          sendEmailVerification(user).then(() => {
            refreshUser();
          });
        }}
      >
        Send Again
      </button>
      {user && user !== null && user.emailVerified === true ? (
        <p>Email is Verified</p>
      ) : (
        <p>Verify Email</p>
      )}
    </div>
  );
};
export default UserInfo;
