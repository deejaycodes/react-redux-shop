import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

const CartButton = ({ total_items }) => {
  return (
    <div className="cart-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total_items: state.cart.length,
  };
};
export default connect(mapStateToProps)(CartButton);
