import React from "react";
import links from "../links";
import background from "./poduct_bg.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${background})` }}>
      <footer>
        <h3>LOGO</h3>
        <ul className="footer-menu">
          {links.map((link) => {
            const { id, text } = link;
            return (
              <li key={id}>
                <a href="#">{text}</a>
              </li>
            );
          })}
        </ul>
      </footer>
      <a href="#" className="copyright">
        Copyright 2021. Shop made with React Redux
      </a>
    </div>
  );
};

export default Footer;
