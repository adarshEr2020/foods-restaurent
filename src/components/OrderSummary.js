import React, { useState, useEffect } from "react";
import "../components/OrderSummary.css";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/context";

export default function OrderSummary({ onClose }) {
  const {
    cartList,
    dispatchCart,
    // total
  } = useGlobalContext();

  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const handleNavigate = () => {
    onClose();
    dispatchCart({ type: "RESET-CART" });
    navigate("/checkout");
  };

  useEffect(() => {
    let value = cartList?.reduce((sum, item) => {
      return sum + item?.price * item?.quantity;
    }, 0);
    setTotal(value);
  }, [cartList]);

  const addToCart = (item) => {
    const foodItem = cartList?.find((cartItem) => cartItem?.id === item.id);
    if (!foodItem) {
      dispatchCart({ type: "ADD-TO-CART", payload: { ...item, quantity: 1 } });
    } else {
      dispatchCart({
        type: "INCR-FOOD-QUANTITY",
        payload: { id: foodItem?.id },
      });
    }
  };

  const deleteToCart = (item) => {
    let foodItem = cartList?.find((cart) => cart?.id === item?.id);

    if (foodItem && foodItem?.quantity > 1) {
      dispatchCart({
        type: "DECR-FOOD-QUANTITY",
        payload: { id: foodItem?.id },
      });
    } else if (foodItem && foodItem?.quantity === 1) {
      dispatchCart({ type: "DELETE-TO-CART", payload: { id: foodItem?.id } });
    }
  };
  return (
    <Paper className="modal">
      <h3 className="modal-title">Order Summary</h3>
      {cartList.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div className="food-item-summ" key={id}>
            <p id="food-text">{name}</p>
            <p id="food-text">{quantity}</p>
            <div className="all-btn">
              <button className="btn pluse" onClick={() => addToCart(cartItem)}>
                +
              </button>
              <button
                className="btn minus"
                onClick={() => deleteToCart(cartItem)}
              >
                -
              </button>
            </div>
          </div>
        );
      })}

      <p className="food-total">
        Total(INR):{""}
        <span style={{ fontWeight: "bolder" }}>{total}</span>
      </p>

      <div className="save-checkout-btn">
        {/* <Link to="/checkout"> */}
        <button className="btn-save-checkout checkout" onClick={handleNavigate}>
          SAVE AND CHECKOUT
        </button>
        {/* </Link> */}
        <button className="btn-save-checkout save" onClick={onClose}>
          CANCEL
        </button>
      </div>
    </Paper>
  );
}
