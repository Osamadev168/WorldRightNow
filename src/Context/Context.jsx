import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { UserStatus } from "../Api/Api";
import { app } from "../Firebase/Config";
export const UserContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      currentUser.getIdToken(true).then(async (token) => {
        UserStatus(token).then((res) => {
          setAdmin(res.data);
        });
      });

      currentUser
        ? localStorage.setItem("authUser", JSON.stringify(currentUser))
        : localStorage.removeItem("authUser");
    });

    return () => {
      unsubscribe();
    };
  }, [user]);
  return (
    <UserContext.Provider value={{ user, admin }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
