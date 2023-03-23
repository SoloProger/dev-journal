import React from "react";
import { Link } from "react-router-dom";
import { navbarLinkList } from "@utils/lists/navbarLinkList";
import ListItem from "../listItem/ListItem";

export default function Navbar() {
  return (
    <header className="mb-16">
      <nav className="flex px-16 py-7 justify-end ">
        <ul className="flex gap-12">
          {navbarLinkList.map((link) => (
            <ListItem key={link.key}>
              <Link to={link.path}>{link.name}</Link>
            </ListItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}
