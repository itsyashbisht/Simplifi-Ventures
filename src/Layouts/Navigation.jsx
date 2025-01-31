import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className=" fixed w-1/2 px-2 sm:px-4 md:px-8 lg:px-12 top-10 left-10">
      <ul className="flex gap-x-12">
        <li className="mr-auto text-gray1 text-2xl font-bold">
          <Link to="/">Simplifi Ventures</Link>
        </li>
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
