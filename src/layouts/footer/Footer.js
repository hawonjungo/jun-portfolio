import React from 'react';
import './footer.css';
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa';
// import "./magnetic.js";

const Footer = () => {
  return (
    <div className="cover">
      <div className="socialBox">
        {' '}
        {/* --partial magnetic-- */}
        <div className="grid grid-cols-4  social ">
          <button
            onclick="location.href='https://www.facebook.com/junsubarashii'"
            target="_blank"
            type="button"
          >
            <FaFacebookSquare />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <FaGithubSquare />
          </button>
          <button>
            <FaInstagramSquare />
          </button>
          <button>
            <FaYoutubeSquare />
          </button>
        </div>
      </div>
      {/* <div className="cursor cursor--large"></div>
      <div className="cursor cursor--small"></div> */}
    </div>
  );
};

export default Footer;
