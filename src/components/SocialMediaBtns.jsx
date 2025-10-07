import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function SocialMediaBtns() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <div className="social-links"> */}
      <a
        href="https://github.com/DionisisChytiris"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <FaGithub className="text-black text-[1.5rem]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <FaLinkedin className="text-blue-600 text-[1.5rem]" />
      </a>
      {/* <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <FaYoutube className="text-red-600 text-[1.5rem]" />
      </a> */}
      {/* <a
        href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        <i className="fab fa-dribbble"></i>
      </a> */}
    </div>
  );
}

export default SocialMediaBtns;
