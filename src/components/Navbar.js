import React from "react";
import "../components/Navbar.css";
import RestaurentLogo from "../assets/restaurant_24px.svg";
import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const {quantity} = useGlobalContext()
  return (
    <div className="nav-title">
      <header className="navbar">
        <div className="navbar-title">
          <img
            src={RestaurentLogo}
            alt="restaurent.svg"
            style={{ color: "white" }}
          />
          <h2 className="logo-text">Food's Restaurent</h2>
        </div>

        <div className="navbar-title">
          <img src="cartlogo" alt="cart.svg" style={{ color: "#ffff" }} />
          <p className="cart-quantity">{quantity}</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
