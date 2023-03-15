import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/router";

export default function App() {
  return <RouterProvider router={router} />;
}
