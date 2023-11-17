import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="nav">
      <Link to="/login" className="loginText">
        Login
      </Link>
      <Link to="/home" className="homeText">
        Tables
      </Link>
      <Link to="/about" className="aboutText">
        About
      </Link>
    </div>
  );
};
