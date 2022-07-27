import React from "react";
import "../components/OrderSummary.css";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

export default function OrderSummary() {
  const { handleAddQuantity, handleSubtractQuantity, cart, quantity } =
    useGlobalContext();
  console.log("sdfs", cart);
  return (
    <Paper className="modal">
      <h3 className="modal-title">Order Summary</h3>
      {cart.map((cartItem) => {
        const { id, name } = cartItem;
        console.log(cartItem);
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
        <Link to="/checkout">
          <button className="btn-save-checkout checkout">
            SAVE AND CHECKOUT
          </button>
        </Link>
        <button className="btn-save-checkout save">CANCEL</button>
      </div>
    </Paper>
  );
}
