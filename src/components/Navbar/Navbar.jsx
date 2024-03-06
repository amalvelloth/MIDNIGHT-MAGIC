import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BsStars } from "react-icons/bs";


function Navbar() {
  
  return (
    <nav className="flex-div navbar-expand-xs-sm-md-lg navbar-custom fixed-top">
      <div className="nav-left flex-div">
        <h3 className="gradient-text">Midnight Magic</h3>
        <BsStars />
      </div>

      <div className="nav-right flex-div">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
