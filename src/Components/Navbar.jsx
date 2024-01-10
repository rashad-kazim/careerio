import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../css/responsive/resp_navbar.css";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav>
      <div className="ham_button_cont">
        <button
          onClick={() => {
            setHamburger(!hamburger);
            console.log(hamburger);
          }}
          className={
            hamburger === true
              ? "hamburger_menu open_hamburger"
              : "hamburger_menu"
          }>
          <span className="ham_line_1"></span>
          <span className="ham_line_2"></span>
          <span className="ham_line_3"></span>
        </button>
      </div>
      <div
        className={hamburger === true ? "main_nav submenu_resp" : "main_nav"}>
        <Link to="/careerio" className="nav_item">
          Home
        </Link>
        <Link to="/about" className="nav_item">
          About
        </Link>
        <Link to="/contact" className="nav_item">
          Contact
        </Link>
      </div>

      <Link to="/" className={hamburger === true ? "loqo loqo_margin" : "loqo"}>
        Landing
      </Link>

      <div className="buy_button_container">
        <Link to="/buy_now" className="buy_button">
          Buy Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
