// import axios from "axios";
import { useEffect, useState } from "react";
import { AuthActionsContext, AuthContext } from "./authContext";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const login = async (inputs) => {
    // const res = await axios.post(
    //   "http://localhost:8800/api/auth/login",
    //   inputs,
    //   {
    //     withCredentials: true,
    //   }
    // );

    setUser("res.data");
  };
  const logOut = async () => {
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isLoaded }}>
      <AuthActionsContext.Provider value={{ setUser, logOut }}>
        {children}
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
