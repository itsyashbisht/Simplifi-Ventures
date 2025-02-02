// CUSTOM IMPORTS
import { Link, NavLink } from "react-router-dom";
import { STYLE_NAVLINKS } from "../Styles";

function Navigation() {
  return (
    <nav className="md:flex lg:flex w-1/2 hidden px-2 sm:px-4 md:px-8 lg:px-12 ">
      <ul className="absolute top-10 md:left-10 lg:left-20">
        <li className="text-gray1 md:text-xl lg:text-2xl font-bold">
          <Link to="/">Simplifi Ventures</Link>
        </li>
      </ul>
      <ul className="flex top-11 md:left-[260px] lg:left-1/3 fixed md:gap-x-6 lg:gap-x-12">
        <li>
          <NavLink to="/team" className={STYLE_NAVLINKS}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/studio" className={STYLE_NAVLINKS}>
            Studio
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className={STYLE_NAVLINKS}>
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
