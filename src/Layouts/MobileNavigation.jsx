import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="w-full md:hidden h-16 items-center px-5 flex justify-between">
        <p className="text-gray1 text-2xl font-bold">Simplifi Ventures</p>
        <span className="text-gray1" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </span>
      </nav>
      {isOpen && (
        <ul
          className={`fixed h-full flex py-48 flex-col shadow-lg items-center justify-evenly top-0 left-0 w-full bg-white opacity-90 z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-100 "
          } transition-transform duration-300 ease-in-out `}
        >
          <span
            className=" absolute top-5 right-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X size={32} />
          </span>
          <li className="text-gray1 font-semibold text-4xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray1 font-semibold text-4xl">
            <Link to="/team">Team</Link>
          </li>
          <li className="text-gray1 font-semibold text-4xl">
            <Link to="/studio">Studio</Link>
          </li>
          <li className="text-gray1 font-semibold text-4xl">
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
