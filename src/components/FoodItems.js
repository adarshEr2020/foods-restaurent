import React from "react";
import "./FoodItems.css";
import { useGlobalContext } from "../context/context";

export default function FoodItems() {
  const { foodList, dispatchFood, cartList, dispatchCart } = useGlobalContext();

  const addToCart = (item) => {
    let foodItem = cartList?.find((cart) => cart?.id === item.id);
    if (!foodItem) {
      dispatchCart({ type: "ADD-TO-CART", payload: { ...item, quantity: 1 } });
      dispatchFood({
        type: "INCR-FOOD-QUANTITY-TO-CART",
        payload: { id: item?.id },
      });
    } else {
      dispatchCart({ type: "INCR-FOOD-QUANTITY", payload: { id: item?.id } });
      dispatchFood({
        type: "INCR-FOOD-QUANTITY-TO-CART",
        payload: { id: item?.id },
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
      dispatchFood({
        type: "DECR-FOOD-QUANTITY-TO-CART",
        payload: { id: foodItem?.id },
      });
    } else if (foodItem && foodItem?.quantity === 1) {
      dispatchCart({ type: "DELETE-TO-CART", payload: { id: foodItem?.id } });
      dispatchFood({
        type: "DECR-FOOD-QUANTITY-TO-CART",
        payload: { id: foodItem?.id },
      });
    }
  };

  return (
    <div className="food-items">
      {foodList.map((foodItem) => {
        const { id, image, name, price, url, quantityToCart } = foodItem;
        console.log(foodItem);
        return (
          <article key={id} className="food-item">
            <img src={url} width="250px" height="150px" alt={image.jpeg} />
            <h2 className="foodname">{name}</h2>
            <p className="foodprice">Price: {price}</p>

            {foodItem?.quantityToCart > 0 && (
              <>
                <p className="foodprice">Total: {quantityToCart}</p>
                <p className="foodprice">Cost(INR):{quantityToCart * price} </p>
              </>
            )}

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
