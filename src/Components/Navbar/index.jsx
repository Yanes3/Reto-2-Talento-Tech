import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline underline-offset-2 text-blue-500"; 
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono px-10"
      role="navigation"
    >
      <div className="font-bold text-xl">
        MiApp
      </div>
      <ul className="flex items-center space-x-4">
        <li className="hover:bg-blue-100 p-2 rounded">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : "text-blue-500 hover:text-blue-600")}
          >
            Mi página
          </NavLink>
        </li>
        <li className="hover:bg-blue-100 p-2 rounded">
          <NavLink
            to="/developers"
            className={({ isActive }) => (isActive ? activeStyle : "text-blue-500 hover:text-blue-600")}
          >
            Developers
          </NavLink>
        </li>
        <li className="hover:bg-blue-100 p-2 rounded">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : "text-blue-500 hover:text-blue-600")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
