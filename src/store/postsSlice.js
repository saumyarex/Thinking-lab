import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
  tags: null,
  category: null,
  searchTerm: null,
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { fetchPosts, setCategory, setTags, setSearchTerm } =
  postsSlice.actions;

export default postsSlice.reducer;
