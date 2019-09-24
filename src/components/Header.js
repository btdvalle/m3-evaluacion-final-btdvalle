import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header_img" alt="RickMorty" />
    </header>
  );
};

export default Header;
