import * as React from "react";
import { Component } from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src="navLogo.png" alt="Logo" height="24" className="me-2" />
          Rhode Island Climbing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/crags" className="nav-link">
                Crags
              </a>
            </li>
            <li className="nav-item">
              <a href="/climbing_clubs" className="nav-link">
                Climbing Clubs
              </a>
            </li>
            <li className="nav-item">
              <a href="/gyms&gear" className="nav-link">
                Gyms & Gear
              </a>
            </li>
            <li className="nav-item">
              <a href="/ice" className="nav-link">
                Ice
              </a>
            </li>
            <li className="nav-item">
              <a href="/links" className="nav-link">
                Links
              </a>
            </li>
            <li className="nav-item">
              <a href="/weather" className="nav-link">
                Weather
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.facebook.com/climbri" target="_blank" className="nav-link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
