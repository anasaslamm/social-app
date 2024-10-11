import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  isLoaded: true,
});

export const AuthActionsContext = createContext({
  setUser: () => {},
  logOut: async () => {},
});
