import React from "react";
import "./footer.css";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
// import "./magnetic.js";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="cover">
      <div className="grid wide  socialBox">
        {" "}
        {/* --partial magnetic-- */}
        <div className=" social ">
          <button
            onClick={() =>
              openInNewTab("https://www.facebook.com/junsubarashii")
            }
          >
            <FaFacebookSquare />
          </button>
          <button
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/jun-hoang-590a07176/")
            }
          >
            <FaLinkedin />
          </button>
          <button onClick={() => openInNewTab("https://github.com/hawonjungo")}>
            <FaGithubSquare />
          </button>
          <button
            onClick={() =>
              openInNewTab("https://www.instagram.com/jun.subarashii")
            }
          >
            <FaInstagramSquare />
          </button>
        </div>
      </div>
      {/* <div className="cursor cursor--large"></div>
      <div className="cursor cursor--small"></div> */}
    </div>
  );
};

export default Footer;
