import React from "react";
import "./footer.css";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";
// import "./magnetic.js";

const Footer = () => {
  return (
    <div class="cover">
      <div class="socialBox">
        {" "}
        {/* --partial magnetic-- */}
        <div class="grid grid-cols-4  social ">
          <button
            onclick="location.href='https://www.facebook.com/junsubarashii'"
            target="_blank"
            type="button"
          >
            <FaFacebookSquare />
          </button>
          <button>
            <FaTwitterSquare />
          </button>
          <button>
            <FaInstagramSquare />
          </button>
          <button>
            <FaYoutube />
          </button>
        </div>
      </div>
      {/* <div class="cursor cursor--large"></div>
      <div class="cursor cursor--small"></div> */}
    </div>
  );
};

export default Footer;
