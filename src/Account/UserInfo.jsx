import { useContext, useState } from "react";
import { addUser } from "../Api/Api";
import { UserContext } from "../Context/Context";
const UserInfo = () => {
  const { user } = useContext(UserContext);
  const defaultValues = {
    userId: "",
    userName: "",
    email: "",
    emailisVerified: false,
    bio: "",
  };
  const [userInfo, setUserInfo] = useState(defaultValues);
  const createUser = () => {
    addUser(userInfo);
    console.log(user);
  };

  return (
    <div>
      {user && user !== null && user.emailVerified === true ? (
        <>
          <label>UserName</label>
          <input
            onChange={(e) =>
              setUserInfo({
                ...user,
                userId: user.uid,
                userName: e.target.value,
                email: user.email,
                emailisVerified: user.emailVerified,
                bio: "",
              })
            }
          />
          <button onClick={createUser}>submit</button>
        </>
      ) : (
        <p>Verify your email first</p>
      )}
    </div>
  );
};
export default UserInfo;
