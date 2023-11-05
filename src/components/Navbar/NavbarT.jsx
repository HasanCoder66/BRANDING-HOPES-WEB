import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar shadow sticky z-50 top-0 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="logo">
        {" "}
        <img
          src="../../src/assets/BH_Logo_AI-01.png"
          alt="Branding-Hopes "
        />
      </div>
      <ul className="nav-links">
        <Link to='/'>
          <li>
            <a>Home</a>
          </li>
        </Link>

        <Link to="/about">
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link to="/services">
          <li>
            <a>Services</a>
          </li>
        </Link>
        <Link to="/blog">
          <li>
            <a>Blog</a>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
