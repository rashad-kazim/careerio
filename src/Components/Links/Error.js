import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <Result
      className="error_def"
      status="404"
      title="404"
      subTitle="Sorry we still thinking About Us"
      extra={
        <Link type="primary" to="/">
          Back Home
        </Link>
      }
    />
  );
};

export default Error;
