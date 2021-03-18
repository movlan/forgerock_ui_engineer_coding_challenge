import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <div className="header-text">
          ForgeRock UI Engineer Coding Challenge
        </div>
      </Link>
    </header>
  );
}

export default Header;
