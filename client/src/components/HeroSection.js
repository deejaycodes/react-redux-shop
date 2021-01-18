import React from "react";

import hero_image from "./undraw_online_shopping_ga73.svg";

const HeroSection = () => {
  return (
    <>
      <div className="main-img">
        <img src={hero_image} alt="shop" />
      </div>
      <div className="main-text">
        <h1>
          Su<font>mm</font>er
        </h1>
        <h2>
          Collec<font>tion</font>
        </h2>
        <a href="" className="main-btn">
          Details
        </a>
      </div>
    </>
  );
};

export default HeroSection;
