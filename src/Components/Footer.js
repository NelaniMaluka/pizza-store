import React from "react";
import { useState } from "react";

import "./Footer.css";

function Footer() {
  const [text, setText] = useState();

  // Determines which text to use depending on the current hour
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const a = isOpen ? "We're currently open" : "Sorry we're currently closed";

  // sets the current time to display for the user
  const time = new Date().toLocaleTimeString(["en-US"], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // updates the time and text to diplay wherethere we're open or not
  setTimeout(() => {
    setText(time + " " + a);
  }, 60000);

  return (
    <footer>
      <p>{text}</p>
      <h4> Subscribe to our free e-newsletter</h4>
      <div className="newsletter">
        <input type="email" placeholder="emailAddress@gmail.com" name="email" />
        <button id="subscribe" type="submit" name="send">
          Subscribe
        </button>
      </div>
      <p>22 amber st, Johannesburg </p>
    </footer>
  );
}

export default Footer;
