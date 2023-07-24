import React from "react";

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="logo.png" alt="Logo" />
        <div className="name-container">
          <a href=" " className="name">
            Pizza Hub & Co.
          </a>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" " className="chosen-nav-page ">
              Menu
            </a>
          </li>
          <li>
            <a href=" ">Drinks</a>
          </li>
          <li>
            <a href=" ">About Us-Events</a>
          </li>
          <li>
            <a href=" ">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
