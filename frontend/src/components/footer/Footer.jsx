import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus accusantium facilis esse magni, libero sit praesentium
            tempora dicta ratione minima non et. Velit, at dolores. Fugiat id
            omnis rerum accusamus vero ab voluptates reprehenderit unde officiis
            dolorum doloremque sapiente expedita, modi maxime asperiores officia
            eius, illum veritatis laudantium distinctio fuga!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About as</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+923112262442</li>
            <li>contact@shazaib.genai@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © shazaib.genai@gmail.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
