import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
  tags: [],
  category: null,
  searchTerm: null,
  deleteMenuActive: false,
  confirmDelete: false,
  deletePostId: null,
  deleteImageId: null,
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
    setDeleteMenuActive: (state) => {
      state.deleteMenuActive = !state.deleteMenuActive;
    },
    setConfirmDelete: (state) => {
      state.confirmDelete = !state.confirmDelete;
    },
    setDeletePostId: (state, action) => {
      state.deletePostId = action.payload;
    },
    setDeleteImageId: (state, action) => {
      state.deleteImageId = action.payload;
    },
  },
});

export const {
  fetchPosts,
  setCategory,
  setTags,
  setSearchTerm,
  setDeleteMenuActive,
  setDeletePostId,
  setDeleteImageId,
  setConfirmDelete,
} = postsSlice.actions;

export default postsSlice.reducer;
