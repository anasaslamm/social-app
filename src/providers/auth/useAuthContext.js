import { useContext } from "react";
import { AuthActionsContext, AuthContext } from "./authContext";

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useAuthActionsContext = () => {
  return useContext(AuthActionsContext);
};
