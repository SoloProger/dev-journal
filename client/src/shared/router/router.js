import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contacts",
    element: <div>Contacts</div>,
  },
]);
