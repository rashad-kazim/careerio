import React from "react";
import { Link } from "react-router-dom";
import "../css/banner.css";
import "../css/responsive/resp_banner.css";
import banner_rect from "../Images/group.png";
import path from "../Images/path.png";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_rep">
        <img src={path} alt="" className="banner_path" />
      </div>
      <div className="banner_details">
        <div className="left_details">
          <div className="left_text">
            <span className="left_header">
              Introduce Your Product Quickly & Effectively
            </span>
            <span className="left_context">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </span>
          </div>
          <div className="left_link_container">
            <Link className="left_links_1">Purchase UI Kit</Link>
            <Link className="left_links_2">Learn More</Link>
          </div>
        </div>
        <div className="right_details">
          <img src={banner_rect} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
