import Link from "next/link";
import React from "react";

//Need to make the color of the svg dynamic.  If its selected then the svg fill needs to change to link-text-selected.

const links = [
  ["Home", "/home"],
  ["Library", "/library"],
  ["Plan", "/plan"],
  ["Tools", "/tools"],
  ["Support", "/support"],
];
const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full	flex justify-around h-12.5 bg-header-color text-xs ">
      {links.map(([title, url]) => (
        <Link
          href={url}
          className="rounded-lg px-3 py-2 text-link-text font-bold hover:bg-slate-100 hover:text-link-text-selected "
        >
          <img
            className="mx-auto hover:text-link-text-selected"
            src={`${url}.svg`}
            alt={`${title}`}
          />
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
