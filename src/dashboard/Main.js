import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate.push("/main");
  };

  return (
    <div>
      <div className="home-title-container">
        <p className="title">
          Welcome to Food's <br />
          Kitchen
        </p>
        <Link to="/menu">
        <button className="menu-btn" onClick={gotoLogin}>
          GO TO MENU
        </button>
        </Link>
      </div>
    </div>
  );
}
