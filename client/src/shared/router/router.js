import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog";
import Main from "../../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
