import React from "react";
import logo from "../../Assets/Logo.png";
import "./logo.css";

export default function Logo() {
  return (
    <div className="logo-wrapper">
      <div className="glow-ring"></div>
      <div className="rotating-border"></div>
      <div className="logo-container">
        <img src={logo} alt="DeepNix Logo" className="logo-img" />
      </div>
    </div>
  );
}
