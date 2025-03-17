import React from "react";
import "./Footer.css";
import Backgroundimg from "../assets/element-1.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${Backgroundimg})` }}>
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title"> <span>Fly</span>USA</h2>
          <div className="privacy-poicy-full">
          <h4><a href="/disclimer" className="privacy-policy">Disclaimer </a></h4>
          <h4><a href="/termandcondition" className="privacy-policy">Term & Condition</a></h4>
          <h4><a href="/privacypolicy" className="privacy-policy">Privacy Policy</a></h4>
          </div>
        </div>
       
      </div>
      <div className="footer-bottom">
  <p>
    Copyright © 2025 | All Rights Reserved | Powered by 
    <a href="https://prwebstock.com/" target="_blank" rel="noopener noreferrer" className="pr-webstock-link"> ♡ PR Webstock</a>
  </p>
  <div className="Footer-social-icons">
    <FaFacebookF />
    <FaTwitter />
    <FaYoutube />
    <FaInstagram />
  </div>
</div>

    </footer>
  );
};

export default Footer;
