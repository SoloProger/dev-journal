import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./blog/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
