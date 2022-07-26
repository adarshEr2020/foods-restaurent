import React, { useEffect, useState } from "react";
import data from "../data/foods.json";
import Navbar from "./Navbar";
import { imageURl } from "../data/imageURL";
import "./FoodItems.css"
console.log(imageURl);
export default function FoodItems() {
  const [foodItem, setFoodItem] = useState([]);
  const allData = data.map((foodItem) => {
    for (let i = 0; i < imageURl.length; i++) {
      return { ...foodItem, url: imageURl[i] };
    }
  });
  console.log(allData);

  return (
    <div className="food-items">
      {allData.map((food, index) => {
        const { name, price, image, url } = food;
        console.log(name, price, image,url);
        return (
          <article key={index} className="food-item">
            <img src={url} width="200px" alt={image.jpeg} />
            <h2>{name}</h2>
            <p>{price}</p>
            <div>
              <button className="btn pluse">+</button>
              <button className="btn minus">-</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
