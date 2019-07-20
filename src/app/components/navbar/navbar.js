import React from "react";
import Logo from "../../assets/Sky Dine.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
    </div>
  );
}
