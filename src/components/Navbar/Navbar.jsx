import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MIDNIGHT MAGIC LOGO-01.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid px-md-5 px-sm-5">
        <a class="navbar-brand" href="#">
          <img className="px-1" style={{ width: "80px" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler" style={{border: 'none', outline: 'none', padding:'0%', boxShadow: 'none'}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
            style={{padding: '0px'}}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            ></path>
          </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
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
