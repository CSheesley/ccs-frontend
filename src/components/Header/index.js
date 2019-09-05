import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu';
import Button from '../Button';
import Logo from '../../assets/images/in-crisis-logo.svg';

// TODO: Add animation to dropdown,
// TODO: call and text links
const Header = () => (
  <header className="header">
    <NavLink className="logo-wrapper-link btn" to="/">
      <h1 className="hidden-text">In Crisis</h1>
      <img src={Logo} className="incrisis-logo-img" alt="InCrisis logo" aria-hidden="true" />
    </NavLink>
    <Button kind="call" size="small" />
    <Menu />
  </header>
);

export default Header;
