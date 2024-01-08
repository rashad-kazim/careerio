import React from "react";
import "../css/card.css";
import "../css/responsive/resp_card.css";
import { Link } from "react-router-dom";

const Card = ({ imageSource, header, content, button }) => {
  return (
    <div className="card_container">
      <div className="img_container">
        <img src={imageSource} alt="" />
      </div>
      <div className="card_right">
        <span className="card_header">{header}</span>
        <span className="card_content">{content}</span>
        {button === true ? (
          <Link to="/about" className="card_button">
            Purchase Now
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
