import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: {}, // Stores likes for each post
};

const likeSlice = createSlice({
  name: "likeCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const postId = action.payload;
      state.likes[postId] = (state.likes[postId] || 0) + 1;
    },
    decrement: (state, action) => {
      const postId = action.payload;
      if (state.likes[postId] > 0) {
        state.likes[postId] -= 1;
      }
    },
  },
});

export const { increment, decrement } = likeSlice.actions; // Export the action creators
export default likeSlice.reducer; // Export the reducer
