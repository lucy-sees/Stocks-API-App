import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import NavBarStyle from './NavBar.module.css';

const NavBar = () => (
  <nav className={NavBarStyle.navContent}>
    <NavLink key={uuidv4()} to="/home">
      <FaArrowLeft name="left-arrow" type="solid" color="#f7f7f7" />
    </NavLink>
    <div>
      <NavLink key={uuidv4()} to="/home" className={NavBarStyle.navLink}>Home</NavLink>
      <NavLink key={uuidv4()} to="/my-profile" className={NavBarStyle.navLink}>Repository</NavLink>
    </div>
  </nav>
);

export default NavBar;
