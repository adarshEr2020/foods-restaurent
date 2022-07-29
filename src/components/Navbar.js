import React, { useState } from "react";
import "../components/Navbar.css";
import RestaurentLogo from "../assets/restaurant_48px.svg";
import OrderSummary from "./OrderSummary";
import Modal from "@mui/material/Modal";

import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const { cartList } = useGlobalContext();
  const [isModalOpen, setIsModaLOpen] = useState(false);
  return (
    <>
      <div className="nav-title">
        <header className="navbar">
          <div className="navbar-title">
            <img src={RestaurentLogo} alt="restaurent.svg" className="logo" />
            <h2 className="logo-text">Food's Restaurent</h2>
          </div>

          {cartList?.length > 0 && (
            <div
              className="navbar-title"
              style={{
                fontWeight: "bolder",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => setIsModaLOpen(true)}
            >
              <p className="cart-quantity">Cart ({cartList?.length})</p>
            </div>
          )}
        </header>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModaLOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OrderSummary onClose={() => setIsModaLOpen(false)} />
      </Modal>
    </>
  );
};

export default Navbar;
