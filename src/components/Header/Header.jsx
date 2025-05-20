import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-gray-900 h-30 flex items-center justify-between px-6 py-4">
        {/* Logo/Image */}
        <Link to="/">
          {/* <img
            src="https://files.oaiusercontent.com/file-AWpXdkfpbZJPVGzR7YVczM?se=2025-03-19T11%3A32%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4286f7a4-5f78-41c2-aa09-94246d40622a.webp&sig=QUe1zVP9oPOOE%2BZCUWGYyQlbvpx%2BLM/zvc1bgn4Cgec%3D    "
            alt="emoji"
            className="w-29 h-29"
          /> */}
        </Link>
                            
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="text-white text-lg hover:text-blue-800 underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="text-white text-lg hover:text-blue-800 underline"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Skills"
              className="text-white text-lg hover:text-blue-800 underline"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className="text-white text-lg hover:text-blue-800 underline"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Education"
              className="text-white text-lg hover:text-blue-800 underline"
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="text-white text-lg hover:text-blue-800 underline"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
