import React from "react";
import "../css/lfp.css";
import "../css/responsive/resp_lfp.css";
import lfp from "../Images/lfp.png";
import lfp_bottom_icon from "../Images/lfp_bottom_icon.png";

const Lfp = () => {
  return (
    <div className="lfp_container">
      <div className="lfp_left">
        <div className="lfp_left_top">
          <span className="lfp_left_top_header">Light, Fast & Powerful</span>
          <span className="lfp_left_top_content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </span>
        </div>
        <div className="lfp_left_bottom">
          <div className="lfp_bottom_left">
            <img src={lfp_bottom_icon} alt="" />
            <span className="lfp_bottom_header">Title Goes Here</span>
            <span className="lfp_bottom_content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </span>
          </div>
          <div className="lfp_bottom_left">
            <img src={lfp_bottom_icon} alt="" />
            <span className="lfp_bottom_header">Title Goes Here</span>
            <span className="lfp_bottom_content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </span>
          </div>
        </div>
      </div>
      <div className="lfp_right">
        <img src={lfp} alt="" />
      </div>
    </div>
  );
};

export default Lfp;
