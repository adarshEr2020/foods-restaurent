import React, { useState, useContext } from "react";
import data from "../data/foods.json";
import { imageURl } from "../data/imageURL";

const AppContext = React.createContext();
const allFoodItem = data.map((foodItem, index) => {
  return { ...foodItem, url: imageURl[index] };
});
const AppProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleSubtractQuantity = () => {
    setQuantity(quantity - 1);
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
