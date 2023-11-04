import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        {" "}
        <img
          src="https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/398660730_122101832408097808_826848894669553659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrelL9W6J_b9xYgU3COfTN0hp7JW5DNXvSGnslbkM1e8YW5XioFmQubbZ709Jp0k8PRfsGpU4DvlaRLWytxRUT&_nc_ohc=u5jwRQCQKIYAX8Nu6tl&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&oh=00_AfBOT6N9bGpmSEj3ADMoHKndffkjr6QNaj5Ox9wbll77YQ&oe=654C2319"
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
