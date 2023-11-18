import Link from "next/link";
import React from "react";

const links = [
  ["login", "/login"],
  ["library", "/library"],
  ["plan", "/plan"],
  ["tools", "/tools"],
  ["support", "/support"],
];
const NavBar = () => {
  return (
    <nav className="absolute bottom-0 left-0 w-full	flex justify-around h-12 bg-body">
      {links.map(([title, url]) => (
        <Link
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

{
  [
    ["Home", "/dashboard"],
    ["Team", "/team"],
    ["Projects", "/projects"],
    ["Reports", "/reports"],
  ].map(([title, url]) => (
    <a
      href={url}
      className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
    >
      {title}
    </a>
  ));
}
