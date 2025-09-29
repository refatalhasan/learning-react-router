import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const linkClasses = ({ isActive }) =>
    `px-5 py-2 rounded-lg font-semibold transition border-2  ${
      isActive ? "bg-white text-gray" : "bg-gray-800 text-white"
    }`;

  return (
    <div>
      <h2>Navbar</h2>
      <nav className="flex gap-2">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact Us
        </NavLink>
        <NavLink to="/users" className={linkClasses}>
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
