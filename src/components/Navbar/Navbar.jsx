import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/MIDNIGHT MAGIC LOGO-01.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isMenuOpen ? "is-open" : ""
      }`}
    >
      <div className="container-fluid  px-md-5 px-sm-5">
        <a className="navbar-brand" href="#">
          <img className="px-1" style={{ width: "80px" }} src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          style={{ border: "none", outline:"none"}}
        >
          <HiOutlineMenuAlt3 className="navbar-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto justify-content-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
