// CUSTOM IMPORTS
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { STYLE_MOBILENAV_LINKS } from "../Styles";

export default function MobileNavigation() {
  // STATE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* HEADER WITH HAMBURGER-MENU BUTTON */}
      <nav className="w-full md:hidden h-16 items-center px-5 flex justify-between">
        <p className="text-gray1 text-2xl font-bold">Simplifi Ventures</p>
        <span className="text-gray1" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </span>
      </nav>

      {/* SIDEBAR NAVIGATION */}
      {isOpen && (
        <ul
          className={`fixed h-full flex py-64 flex-col shadow-lg items-center justify-evenly top-0 left-0 w-full bg-white opacity-90 z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-100 "
          } transition-transform duration-300 ease-in-out `}
        >
          <span
            className=" absolute top-5 right-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X size={32} />
          </span>
          <li>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/team">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/studio">
              Studio
            </NavLink>
          </li>
          <li>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/resources">
              Resources
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
