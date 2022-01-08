import React from "react";
import './Header.css'

const Header = () => {
  return <header>
    <ul className="header">
      <li>LOGO</li>
      <li><input type="text" className="searchInput"></input></li>
      <li>Redes sociales</li>
    </ul>
  </header>;
};

export default Header;
