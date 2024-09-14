import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="brand">
        3legant.
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Product</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
      </nav>

      <div className="nav-icons">
        <NavLink to="/sign-in" className="nav-icon"><img src="./images/icons/user-circle.svg" alt="User" /></NavLink>
        <NavLink to="/cart" className="nav-icon">
          <img src="./images/icons/shopping bag.svg" alt="Bag" />
          <span className="cart-count">2</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
