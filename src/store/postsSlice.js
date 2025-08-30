import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
  tags: null,
  category: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.postsData = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { fetchPosts, setCategory, setTags } = postsSlice.actions;

export default postsSlice.reducer;
