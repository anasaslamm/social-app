import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActionsContext } from "../providers/auth/useAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, logOut } = useAuthActionsContext();
  const login = () => {
    setUser({ name: "abc" });
    console.log("attempting...");
    navigate("/");
  };

  return (
    <>
      this is login<button onClick={login}>Login</button>
    </>
  );
};

export default Login;
