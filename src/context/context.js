import React, { useState, useContext } from "react";
import data from "../data/foods.json";
import { imageURl } from "../data/imageURL";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const navigate = useNavigate();

  // eslint-disable-next-line
  const allFoodItem = data.map((foodItem, index) => {
    return { ...foodItem, url: imageURl[index] };
  });
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(cart);

  const handleAddQuantity = () => {
    // if (quantity >= 0) {
    //   setQuantity(quantity + 1);
    // }
  };
  const handleSubtractQuantity = () => {
    // if (quantity >= 1) {
    //   setQuantity(quantity - 1);
    // }
  };

  const viewCartModel = (e, id, name) => {
    e.preventDefault();
    let foodItems = allFoodItem.find((item) => {
      return item.id === id;
    });
    let temp = [...cart, { ...foodItems, quantity: 1 }];
    console.log("temp", temp);
    setCart(temp);

    handleOpen();
  };

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };

  return (
    <AppContext.Provider
      value={{
        handleAddQuantity,
        handleSubtractQuantity,
        allFoodItem,
        open,
        handleOpen,
        handleClose,
        viewCartModel,
        cart,
        // navigate,
        // handleNavigate,
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
