import React, { useContext, useReducer } from "react";
import data from "../data/foods.json";
import { imageURl } from "../data/imageURL";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART": {
      return [...state, action?.payload];
    }
    case "INCR-FOOD-QUANTITY": {
      let updatedCart = state?.map((item) => {
        return item?.id === action?.payload?.id
          ? { ...item, quantity: item?.quantity + 1 }
          : item;
      });
      return updatedCart;
    }
    case "DECR-FOOD-QUANTITY": {
      let updatedCart = state?.map((item) => {
        return item?.id === action?.payload?.id
          ? { ...item, quantity: item?.quantity - 1 }
          : item;
      });
      return updatedCart;
    }
    case "DELETE-TO-CART": {
      let updatedCart = state?.filter((item) => {
        return item?.id !== action?.payload?.id;
      });
      return updatedCart;
    }
    case "RESET-CART": {
      return [];
    }
    default:
      return state;
  }
};

const foodReducer = (state, action) => {
  switch (action?.type) {
    case "INCR-FOOD-QUANTITY-TO-CART": {
      let updatedFoodList = state?.map((item) => {
        return item?.id === action?.payload?.id
          ? { ...item, quantityToCart: item?.quantityToCart + 1 }
          : item;
      });
      return updatedFoodList;
    }
    case "DECR-FOOD-QUANTITY-TO-CART": {
      let updatedFoodList = state?.map((item) => {
        return item?.id === action?.payload?.id
          ? { ...item, quantityToCart: item?.quantityToCart - 1 }
          : item;
      });
      return updatedFoodList;
    }
    case "RESET-FOOD": {
      let updatedFoodList = state?.map((item) => {
        return { ...item, quantityToCart: 0 };
      });
      return updatedFoodList;
    }
    default:
      return state;
  }
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialCart = [];
  const [cartList, dispatchCart] = useReducer(cartReducer, initialCart);

  const initialFoodList =
    data.map((item, index) => {
      return { ...item, url: imageURl[index], quantityToCart: 0 };
    }) || [];

  const [foodList, dispatchFood] = useReducer(foodReducer, initialFoodList);
  return (
    <AppContext.Provider
      value={{
        foodList,
        dispatchFood,
        cartList,
        dispatchCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// cuustom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
