import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link className="logo" to="/">
          LOGO
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
