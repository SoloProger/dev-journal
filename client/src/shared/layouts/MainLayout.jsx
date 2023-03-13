import React from "react";
import Navbar from "../components/navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}
