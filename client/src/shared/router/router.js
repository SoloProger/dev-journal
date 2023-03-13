import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "/blog",
    element: <div>Blog</div>,
  },
  {
    path: "/contacts",
    element: <div>Contacts</div>,
  },
]);
