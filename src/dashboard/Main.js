import React from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate.push("/main");
  };

  return (
    <div>
      <div className="home-ttile-container">
        <p>
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
