import React from "react";
import "../components/OrderSummary.css";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/context";

export default function OrderSummary({cart}) {
  const {
    quantity,
    handleAddQuantity,
    handleSubtractQuantity,
    handleClose,
  } = useGlobalContext();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/checkout");
  };

  return (
    <Paper className="modal">
      <h3 className="modal-title">Order Summary</h3>
      {cart.map((cartItem) => {
        const { id, name,quantity } = cartItem;
        return (
          <div className="food-item-summ" key={id}>
            <p id="food-text">{name}</p>
            <p id="food-text">{quantity}</p>
            <div className="all-btn">
              <button className="btn pluse" onClick={handleAddQuantity}>
                +
              </button>
              <button className="btn minus" onClick={handleSubtractQuantity}>
                -
              </button>
            </div>
          </div>
        );
      })}

      <p className="food-total">Total(INR) 200</p>

      <div className="save-checkout-btn">
        {/* <Link to="/checkout"> */}
        <button className="btn-save-checkout checkout" onClick={handleNavigate}>
          SAVE AND CHECKOUT
        </button>
        {/* </Link> */}
        <button className="btn-save-checkout save" onClick={handleClose}>
          CANCEL
        </button>
      </div>
    </Paper>
  );
}
