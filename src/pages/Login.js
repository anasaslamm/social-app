import React from "react";
import { useNavigate } from "react-router-dom";

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
      this is login<Button onClick={login}>Login</Button>
    </>
  );
};

export default Login;
