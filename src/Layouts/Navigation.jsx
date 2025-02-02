import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex w-1/2 px-2 sm:px-4 md:px-8 lg:px-12 ">
      <ul className="absolute top-10 md:left-10 lg:left-20">
        <li className="text-gray1 md:text-xl lg:text-2xl font-bold">
          <Link to="/">Simplifi Ventures</Link>
        </li>
      </ul>
      <ul className="flex top-11 md:left-64 lg:left-1/3 fixed md:gap-x-6 lg:gap-x-12">
        <li>
          <Link to="/team" className="text-sm text-Blue2 font-semibold">
            Team
          </Link>
        </li>
        <li>
          <Link to="/studio" className="text-sm text-Blue2 font-semibold">
            Studio
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-sm text-Blue2 font-semibold">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
