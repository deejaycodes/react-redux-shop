import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART } from "../actions/cartactions";

const Cart = ({ cart }) => {
  return (
    <div className="section section-center">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Cart);
