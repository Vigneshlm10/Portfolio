import React from "react";
import "../style.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content">
        {["facebook", "twitter", "linkedin", "github"].map((icon) => (
          <a key={icon} href="#" className={`fab fa-${icon}`}></a>
        ))}
      </div>
      <p className="footer__text">© 2024 My Portfolio. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
