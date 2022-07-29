import React from "react";
import "./FoodItems.css";
import { useGlobalContext } from "../context/context";

export default function FoodItems() {
  const { foodList, cartList, dispatchCart } = useGlobalContext();

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
    <div className="food-items">
      {foodList.map((foodItem) => {
        const { id, image, name, price, url } = foodItem;
        console.log(foodItem);
        return (
          <article key={id} className="food-item">
            <img src={url} width="250px" height="150px" alt={image.jpeg} />
            <h2 className="foodname">{name}</h2>
            <p className="foodprice">Price: {price}</p>
          
            <div className="btn-contain">
              <button className="btn pluse" onClick={() => addToCart(foodItem)}>
                +
              </button>
              <button
                className="btn minus"
                onClick={() => deleteToCart(foodItem)}
              >
                -
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
