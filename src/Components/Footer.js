import React from "react";

import "./Footer.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      <p>We're cuttently open</p>
    </footer>
  );
}

export default Footer;
