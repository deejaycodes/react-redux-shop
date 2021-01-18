import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
      <a href="">
        <FaFacebook className="social-icon"></FaFacebook>
      </a>
      <a href="">
        <FaInstagram className="social-icon"></FaInstagram>
      </a>
      <a href="">
        <FaTwitter className="social-icon"></FaTwitter>
      </a>
      <a href="">
        <FaYoutube className="social-icon"></FaYoutube>
      </a>
    </div>
  );
};

export default Social;
