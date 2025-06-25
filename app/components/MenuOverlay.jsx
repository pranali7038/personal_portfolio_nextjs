import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, activeSection }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            isActive={activeSection === link.path}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
