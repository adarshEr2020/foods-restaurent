import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  console.log(user);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.password !== "") {
      navigate.push("/menu");
      console.log("success");
    } else {
      console.log("enter id password");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="form-container">
        <form className="form-main" onSubmit={loginUser}>
          <h2>Login for food order food</h2>
          <div className="input-box">
            <label>User Name:</label>
            <input
              type="text"
              data-test="username"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-box">
            <label>Password:</label>
            <input
              type="password"
              data-test="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input className="submit-btn" type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    </>
  );
}
