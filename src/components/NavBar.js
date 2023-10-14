import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import NavBarStyle from './NavBar.module.css';

const NavBar = () => (
  <nav className={NavBarStyle.navContent}>
    <NavLink key={uuidv4()} to="/home">
      <FaArrowLeft name="left-arrow" type="solid" color="#f8f8f8" />
    </NavLink>
    <div>
      <NavLink key={uuidv4()} to="/home" className={NavBarStyle.navLink}>Home</NavLink>
      <NavLink key={uuidv4()} to="https://github.com/lucy-sees" className={NavBarStyle.navLink}>Github</NavLink>
    </div>
  </nav>
);

export default NavBar;
