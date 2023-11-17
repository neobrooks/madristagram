import React, { useState } from 'react';
import './topbar.css';

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`top ${menuOpen ? 'open' : ''}`}>
      <div className="logo">Your Logo</div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>
          Real Madrid
          <ul className="submenu">
            <li>History</li>
            <li>Trophy Cabinet</li>
            <li>Players</li>
            <li>Estadio Santiago Bernabeu</li>
            <li>Chants & Anthem</li>
          </ul>
        </li>
        <li>
          First Team
          <ul className="submenu">
            <li>News</li>
            <li>Fixtures and Results</li>
            <li>Squad</li>
          </ul>
        </li>
        <li>
          Femenino
          <ul className="submenu">
            <li>News</li>
            <li>Fixtures and Results</li>
            <li>Squad</li>
          </ul>
        </li>
        <li>
          Youth Academy
          <ul className="submenu">
            <li>News</li>
            <li>Fixtures and Results</li>
            <li>Squad</li>
          </ul>
        </li>
        <li>
          Fanclub
          <ul className="submenu">
            <li>Events</li>
            <li>Collections</li>
            <li>All Products</li>
          </ul>
        </li>
        <li>Social Media</li>
        <li>
          Team Madristagram
          <ul className="submenu">
            <li>Team</li>
            <li>Contact Us</li>
            <li>Advertise with Us</li>
          </ul>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
