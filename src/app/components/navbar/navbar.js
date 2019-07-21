import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="orange-tree" />
      </Link>
    </div>
  );
}
