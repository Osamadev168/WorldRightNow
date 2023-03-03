import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Config";
export const UserContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState("");
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAvatar(currentUser.photoURL);
      currentUser
        ? localStorage.setItem("authUser", JSON.stringify(currentUser))
        : localStorage.removeItem("authUser");
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, avatar }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
