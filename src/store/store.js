import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    likeCounter: likeReducer,
  },
});
