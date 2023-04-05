import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { UserStatus } from "../Api/Api";
import { app } from "../Firebase/Config";
export const UserContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setProfilePic(currentUser.photoURL);
        setLoading(true);
        currentUser.getIdToken(true).then(async (token) => {
          setLoading(true);
          setToken(token);
          UserStatus(token).then((res) => {
            setAdmin(res.data);
            setLoading(false);
          });
        });

        currentUser
          ? localStorage.setItem("authUser", true)
          : localStorage.removeItem("authUser");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);
  return (
    <UserContext.Provider value={{ user, admin, token, loading, profilePic }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
