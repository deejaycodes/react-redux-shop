import React from "react";
import { connect } from "react-redux";
import {
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  UPDATE_LOCAL_STORAGE,
} from "../actions/cartactions";

const ProductItem = ({
  img,
  price,
  details,
  addToCart,
  updateLocalStorage,
}) => {
  return (
    <div className="p-box">
      <img src={img} alt={details} />
      <p>{details}</p>
      <a href="" className="price">
        ${price}
      </a>
      <button className="buy-btn" onClick={() => addToCart()}>
        Add To Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, price, amount, details } = ownProps;
  return {
    addToCart: () =>
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id,
          price,
          amount,
          details,
        },
      }),

    updateLocalStorage: () => {
      dispatch({
        type: UPDATE_LOCAL_STORAGE,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
