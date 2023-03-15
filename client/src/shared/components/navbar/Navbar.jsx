import React from "react";
import { navbarLinkList } from "../../utils/lists/navbarLinkList";
import ListItem from "../listItem/ListItem";

export default function Navbar() {
  return (
    <header className="mb-36">
      <nav className="flex px-16 py-7 justify-end ">
        <ul className="flex gap-12">
          {navbarLinkList.map((link) => (
            <ListItem key={link.key}>
              <a href={link.path}>{link.name}</a>
            </ListItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}
