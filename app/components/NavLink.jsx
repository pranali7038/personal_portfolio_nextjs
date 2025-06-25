"use client";
import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`relative block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition duration-300
        ${isActive ? "text-purple-400 font-semibold" : "text-[#ADB7BE] hover:text-white"}
      `}
    >
      {title}
      {isActive && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500"
        />
      )}
    </Link>
  );
};

export default NavLink;
