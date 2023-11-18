import React from "react";
import "./sidebar.css";
import MadristagramLogo from './madristagram-logo-dark.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="madristagram-header">
        <h1>Madristagram</h1>
      </div>
      <div className="profile-section">
        <img src={MadristagramLogo} alt="Madristagram Logo" className="profile-image" />
        <p>Categories</p>
      </div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/first-team">First Team</a>
        <a href="/femenino">Femenino</a>
        {/* Add more navigation links as needed */}
      </div>
      <div className="follow-us">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
