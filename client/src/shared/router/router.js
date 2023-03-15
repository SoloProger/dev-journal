import { createBrowserRouter } from "react-router-dom";
import Post from "@pages/Post";
import MainLayout from "../layouts/MainLayout";
import Blog from "../../pages/Blog";
import Main from "../../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Main</div>,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/blog/post/:postId",
        element: <Post />,
      },
      {
        path: "/contacts",
        element: <div>Contacts</div>,
      },
    ],
  },
]);
