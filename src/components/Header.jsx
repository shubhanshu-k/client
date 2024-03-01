import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="NavBar Logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile"> Profile</Link>
            <Link to="/create"> create</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/logout">Logout</Link>
            <button className="nav__toggle-btn"></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
