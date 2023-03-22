import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostApi from "@api/post.api";

const initialState = {
  posts: [],
  recentPosts: [],
};

const postApi = new PostApi();

export const loadPost = createAsyncThunk("post/load", async () => {
  const posts = await postApi.getPosts();
  return posts;
});

export const loadRecentPosts = createAsyncThunk("recentPost", async () => {
  const recentPosts = await postApi.getPosts({ recent: true });
  return recentPosts;
});

export const addNewPost = createAsyncThunk(
  "post/create",
  async (payload, thunkApi) => {
    const post = await postApi.createPost(payload);
    thunkApi.dispatch(addPost(payload));
    return post;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadRecentPosts.fulfilled, (state, action) => {
        state.recentPosts = action.payload;
      });
  },
});

const { addPost } = postSlice.actions;

export default postSlice.reducer;
