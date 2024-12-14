import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./authSlice";
import { postApi } from "./apiStore";

export const store = configureStore({
  reducer: {
    likeCounter: likeReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
