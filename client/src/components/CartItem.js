import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions/cartactions";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";

const CartItem = ({
  id,
  img,
  name,
  amount,
  price,
  increase,
  decrease,
  remove,
}) => {
  return (
    <div className="item-box">
      <div className="title">
        <img src={img} alt="a" />
        <h3>{name}</h3>
        <h5 className="">{price}</h5>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{price * amount}</h5>
      <button className="remove-btn" onClick={() => remove(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, price, amount, details } = ownProps;
  return {
    increase: () =>
      dispatch({
        type: INCREASE,
        payload: {
          id,
        },
      }),
    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: {
          id,
        },
      }),
    remove: () =>
      dispatch({
        type: REMOVE,
        payload: {
          id,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
