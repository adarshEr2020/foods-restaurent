import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/menu");
  };

  return (
    <div>
      <div className="home-title-container">
        <p className="title">
          Welcome to Food's <br />
          Kitchen
        </p>
        <button className="menu-btn" onClick={gotoLogin}>
          GO TO MENU
        </button>
      </div>
    </div>
  );
}
