import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Config";
export const UserContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      currentUser.email === "osamatwenty@gmail.com" ||
      currentUser.email === "daniyalhundred@gmail.com"
        ? setAdmin(true)
        : setAdmin(false);
      currentUser
        ? localStorage.setItem("authUser", JSON.stringify(currentUser))
        : localStorage.removeItem("authUser");
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserContext.Provider value={{ user, admin, setAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
