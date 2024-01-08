import React from "react";
import { Link } from "react-router-dom";
import "../css/price.css";
import "../css/responsive/resp_price.css";

const Price = () => {
  return (
    <div className="price_container">
      <span className="price_header">A Price To Suit Everyone</span>
      <span className="price_content">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </span>
      <span className="price_bar">$40</span>
      <span className="price_name">UI Design Kit</span>
      <span className="price_sos">See, One price. Simple.</span>
      <Link to="/purchase" className="price_button">
        Purchase Now
      </Link>
    </div>
  );
};

export default Price;
