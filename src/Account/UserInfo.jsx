import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { addUser } from "../Api/Api";
import { UserContext } from "../Context/Context";
const UserInfo = () => {
  const { user } = useContext(UserContext);
  const [userName, setUserName] = useState("");

  const createUser = async () => {
    await user.updateProfile({
      displayName: userName,
    });
  };
  useEffect(() => {
    if (!!user && !user?.emailVerified) {
      setInterval(() => {
        user?.reload().then();
      }, 3000);
    }
  }, []);
  return (
    <div style={{ margin: 100 }}>
      <h3>Welcome {user && user !== null ? user.displayName : ""}</h3>

      <button
        onClick={() => {
          sendEmailVerification(user);
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
