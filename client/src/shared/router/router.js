import { createBrowserRouter } from "react-router-dom";
import Post from "@pages/Post";
import Blog from "@pages/Blog";
import Main from "@pages/Main";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:postId",
        element: <Post />,
      },
    ],
  },
]);
