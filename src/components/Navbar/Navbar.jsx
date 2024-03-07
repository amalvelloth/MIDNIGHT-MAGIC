import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MIDNIGHT MAGIC LOGO-01.png";


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div class="container-fluid px-md-5">
        <a class="navbar-brand" href="#">
          <img style={{width:'80px'}} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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

/*function Navbar() {
  
  return (
    <nav className="flex-div navbar-expand-xs-sm-md-lg navbar-custom fixed-top">
      <div className="nav-left flex-div">
        <img style={{width:'80px'}} src={img} alt="" />
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

export default Navbar;*/
