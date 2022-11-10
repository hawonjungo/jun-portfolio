import React from "react";
import "./footer.css";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div class="socialBox">
      {" "}
      {/* --partial magnetic-- */}
      <div class="grid grid-cols-4 gap-4 social">
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
  );
};

export default Footer;
