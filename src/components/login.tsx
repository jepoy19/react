import React, { useRef } from "react";
import "./Login.css";
import Home from "./Home";
function Login({ onLoginUpdate }) {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const getEmail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("password");

  const handleSubmit = () => {
    if (
      email.current.value === "j@gmail.com" &&
      password.current.value === "123"
    ) {
      localStorage.setItem("email", "j@gmail.com");
      localStorage.setItem("password", "123");
    }
  };
  return (
    <div>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit} className="logInForm">
          <div>
            <input
              type="text"
              ref={email}
              className="emailInput"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              ref={password}
              className="passwordInput"
              placeholder="Password"
              required
            />
          </div>
          <button className="loginButton" type="submit">
            LOGIN
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
