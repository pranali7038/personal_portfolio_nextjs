"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Achievements", path: "#achievements" },
  { title: "Projects", path: "#projects" },
  { title: "Blogs", path: "#blogs" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop - 150; // buffer for nav height
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = link.path;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-[#33353F]">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        {/* Logo */}
        <Link href="/">
          <div className="ml-4 bg-gradient-to-tr from-purple-700 via-blue-500 to-cyan-400 p-[1px] rounded-full w-8 h-8 md:w-10 md:h-10">
            <img
              src="/images/profile-logo.png"
              alt="Pranali"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeSection === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} activeSection={activeSection} />
      )}
    </nav>
  );
};

export default Navbar;
