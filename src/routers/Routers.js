import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import Main from "../dashboard/Main";
import Login from "../components/Login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<FoodItems />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
