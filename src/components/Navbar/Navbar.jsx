import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import Button from "../Button";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        {" "}
        <img
          src="../../src/assets/BH_Logo_AI-01.png"
          alt="Branding-Hopes "
        />
      </div>
      <ul className="nav-links">
        <Link >
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
        <div class="button-container">
          <Link to='/login'>
          <button class="login-button">Login</button>
          </Link>
         <Link to='/signup'>
         <button class="signup-button">Signup</button>
         </Link>
        </div>
    </div>
  );
}

export default Navbar;
