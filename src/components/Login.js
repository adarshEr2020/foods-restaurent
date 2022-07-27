import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  // const [isLogin,setIsLogin] = useState(false)
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
      console.log("success");
    } else {
      console.log("enter id password");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form-main" onSubmit={loginUser}>
          <h2>Login for food order from the restaurent </h2>
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
          <input className="submit-btn" type="submit" value="LOGIN" data-test="submit" />
        </form>
      </div>
    </>
  );
}
