import React from "react";
import "../components/Navbar.css";
import RestaurentLogo from "../assets/restaurant_24px.svg";
const Navbar = () => {
  return (
    <header className="navbar">
      {/* <div className="nav-title"> */}
        <img src={RestaurentLogo} alt="restaurent.svg" />
        <h2 className="logo-text">Food's Restaurent</h2>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
