import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkdin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <hr />
        <div className="footer">
          <div className="social-links">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkdin} alt="" />
          </div>

          <div className="logo-f">
            <img src={Logo} alt="" />{" "}
          </div>
        </div>
        <div className="blur footer-blur-1">
          <button>join</button>
        </div>
        <div className="blur footer-blur-2"></div>
      </div>
    </div>
  );
}

export default Footer;
