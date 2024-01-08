import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../css/footer.css";
import "../css/responsive/resp_footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="first_container">
        <span className="company">©2023 Your Company</span>
        <span className="landing">Landing</span>
        <div className="purchase_button">
          <Link className="button_insert">Purchase now</Link>
        </div>
      </div>
      <div className="footer_rectangle"></div>
      <div className="last_container">
        <div className="footer_menu">
          <div className="main_nav">
            <Link to="/" className="footer_item">
              Home
            </Link>
            <Link to="/about" className="footer_item">
              About
            </Link>
            <Link to="/contact" className="footer_item">
              Contact
            </Link>
          </div>
        </div>
        <div className="sm_container">
          <FaFacebookF fill=" #B0B8BC" className="sm_icons" />
          <FaLinkedinIn fill=" #B0B8BC" className="sm_icons" />
          <FaTwitter fill=" #B0B8BC" className="sm_icons" />
          <FaYoutube fill=" #B0B8BC" className="sm_icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
