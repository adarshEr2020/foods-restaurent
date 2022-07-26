import React from "react";
import "../components/Navbar.css";
import RestaurentLogo from "../assets/restaurant_24px.svg";
const Navbar = () => {
  return (
    <div className="nav-title">
      <header className="navbar">
        <img
          src={RestaurentLogo}
          alt="restaurent.svg"
          style={{ color: "white" }}
        />
        <h2 className="logo-text">Food's Restaurent</h2>
      </header>
    </div>
  );
};

export default Navbar;
