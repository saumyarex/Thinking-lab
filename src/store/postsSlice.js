import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.postsData = action.payload.postsData;
    },
  },
});

export const { fetchPosts } = postsSlice.actions;

export default postsSlice.reducer;
