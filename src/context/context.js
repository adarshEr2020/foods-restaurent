import React, { useState, useContext } from "react";
import data from "../data/foods.json";
import { imageURl } from "../data/imageURL";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // eslint-disable-next-line
  const allFoodItem = data.map((foodItem, index) => {
    return { ...foodItem, url: imageURl[index] };
  });
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(cart);

  const handleAddQuantity = () => {
    if (quantity >= 0) {
      setQuantity(quantity + 1);
    }
  };
  const handleSubtractQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const viewCartModel = (e, id) => {
    e.preventDefault();
    let foodItems = allFoodItem.filter((item) => {
      return item.id === id;
    });
    setCart([...cart, foodItems]);
    handleOpen();
  };

  return (
    <AppContext.Provider
      value={{
        handleAddQuantity,
        handleSubtractQuantity,
        quantity,
        allFoodItem,
        open,
        setQuantity,
        handleOpen,
        handleClose,
        viewCartModel,
        cart,
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
