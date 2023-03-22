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

export const editCurrentPost = createAsyncThunk(
  "post/edit",
  async (payload, thunkApi) => {
    const post = await postApi.updatePost(payload, payload.id);
    thunkApi.dispatch(editPost(payload));
    return post;
  }
);

export const removePost = createAsyncThunk(
  "post/remove",
  async (payload, thunkApi) => {
    const post = await postApi.deletePost(payload);
    thunkApi.dispatch(popPost(payload));
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
    popPost(state, action) {
      state.posts = state.posts.filter((value) => value.id !== action.payload);
    },
    editPost(state, action) {
      console.log(action);
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
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

const { addPost, popPost, editPost } = postSlice.actions;

export default postSlice.reducer;
