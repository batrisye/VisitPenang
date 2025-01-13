import React , {useState} from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container"> 
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="visit-penang">Visit Penang</h1> 
      </div>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/NaturePage" activeClassName="active">Nature and Recreation</NavLink></li>
          <li><NavLink to="/HeritagePage" activeClassName="active">Heritage</NavLink></li>
          <li><NavLink to="/FoodPage" activeClassName="active">Food and Beverages</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;