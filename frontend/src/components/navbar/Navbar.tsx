import Link from "next/link";
import React from "react";
import { routes } from "@/routing/routes";

function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-end gap-4 p-6">
        {routes.map((route) => (
          <li key={route.path} className="text-3xl font-medium">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
