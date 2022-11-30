import React from "react";
import "./header.css";
import "../../css/grid.css";

const Header = () => {
  return (
    <div>
      {" "}
      <div className="row">
        <div className="nav">
          <a className="col l-2   " href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About
          </a>
          <a className="col l-2 " href="/portfolio">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Portfolio
          </a>
          <a className="col l-2  " href="/contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
