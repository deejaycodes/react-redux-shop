import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";

const Cart = ({ cart }) => {
  if (cart.length < 1) {
    return (
      <div className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
        </div>
      </div>
    );
  }
  return (
    <main>
      <div className="page">
        <CartContent></CartContent>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Cart);
