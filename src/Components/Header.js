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
            <a href=" " className=" ">
              Home
            </a>
          </li>
          <li>
            <a href=" " className=" ">
              Menu
            </a>
          </li>
          <li>
            <a href=" " className=" ">
              Drinks
            </a>
          </li>
          <li>
            <a href=" " className=" ">
              About Us-Events
            </a>
          </li>
          <li>
            <a href=" " className=" ">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
