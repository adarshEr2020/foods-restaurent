import React from "react";
import "./FoodItems.css";
import OrderSummary from "./OrderSummary";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../context/context";

export default function FoodItems() {
  const {
    allFoodItem,
    open,
    handleAddQuantity,
    handleSubtractQuantity,
    handleOpen,
    handleClose,
  } = useGlobalContext();

  return (
    <>
      <div className="food-items">
        {allFoodItem.map((food, index) => {
          const { name, price, image, url } = food;
          return (
            <article key={index} className="food-item" onClick={handleOpen}>
              <img src={url} width="200px" height="120px" alt={image.jpeg} />
              <h2 className="foodname">{name}</h2>
              <p className="foodprice">{price}</p>
              <div className="btn-contain">
                <button className="btn pluse" onClick={handleAddQuantity}>
                  +
                </button>
                <button className="btn minus" onClick={handleSubtractQuantity}>
                  -
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OrderSummary />
      </Modal>
    </>
  );
}
