import React from "react";
import { ADD_TO_CART } from "../actions/cartactions";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = () => {
  return (
    <div>
      <button className="buy-btn">Add To Cart</button>
    </div>
  );
};

export default AddToCart;
