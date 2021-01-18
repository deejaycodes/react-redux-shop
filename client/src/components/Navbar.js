import React from "react";
import background from "./poduct_bg.png";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    <div style={{ background: `url(${background})` }}>
      <section className="main">
        <div className="logo">
          <a href="#">
            <font>
              REDUX<br></br>
            </font>
            SHOP
          </a>
        </div>
        <CartButton />
      </section>
    </div>
  );
};

export default Navbar;
