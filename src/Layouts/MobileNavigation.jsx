// CUSTOM IMPORTS
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { STYLE_MOBILENAV_LINKS } from "../Styles";
import { motion } from "framer-motion";

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
        <motion.ul
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 0.3 }}
          className={`fixed h-full flex py-48 flex-col shadow-lg items-center justify-evenly top-0 left-0 w-full bg-white  z-50`}
        >
          <span
            className=" absolute top-5 right-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X size={32} />
          </span>
          <motion.li whileHover={{ scale: 1.2 }}>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/">
              Home
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/team">
              Team
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/studio">
              Studio
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <NavLink className={STYLE_MOBILENAV_LINKS} to="/resources">
              Resources
            </NavLink>
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}
