import React from "react";
import "../components/OrderSummary.css";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
export default function OrderSummary() {
  return (
    <Paper className="modal">
      <h3 className="modal-title">Order Summary</h3>
      <div className="food-item-summ">
        <p id="food-text">burger</p>
        <p id="food-text">0</p>
        <div className="all-btn">
          <button className="btn pluse">+</button>
          <button className="btn minus">-</button>
        </div>
      </div>

      <p className="food-total">Totak(INR) 200</p>

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
