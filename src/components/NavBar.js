// NavBar.js
import React from 'react';
import './NavBar.css'; // Import CSS file for NavBar component

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Home</li>
        <li>Schedule</li>
        <li>Status</li>
        <li>Meal</li>
        <li>Cancel Ticket</li>
        <li>About</li>
        <li>More</li>
        <li>
          <span className="search-icon">Search Icon</span>
        </li>
        <li>
          <span className="wallet-icon">Wallet Icon</span>
        </li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
};

export default NavBar;
