import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link nav__link--home" > Home  </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link nav__link--about" > About </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" className="nav__link nav__link--contact" > Contact </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="blog" className="nav__link nav__link--blog" > Blog </NavLink>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
