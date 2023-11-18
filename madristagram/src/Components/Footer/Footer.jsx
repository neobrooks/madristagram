import React from 'react';
import './topbar.css';
import MadristagramLogo from "./madristagram-logo-dark.png"

const MadristagramFooter = () => {
      return (
        <footer className="footer">
          <div className="footer-container footer-container-top">
            <div className="footer-logo-section">
              <a
                href="/"
                className="footer-logo-link"
                aria-label="Go to Madristagram homepage"
              >
                <img
                  src={MadristagramLogo}
                  alt="Madristagram Logo"
                  className="footer-logo-image"
                />
              </a>
              <div className="newsletter-section">
                <h2 className="newsletter-title">Subscribe to Madristagram Insider</h2>
                <p className="newsletter-description">
                  Stay updated with the latest trends and features. Subscribe to our newsletter.
                </p>
                <a href="#" className="newsletter-subscribe-link"> Subscribe </a>
              </div>
            </div>
            <div className="footer-links-section">
              <h2 className="footer-links-header">Shop</h2>
              <ul className="footer-list">
                <li className="footer-link-item">
                  <a className="footer-link" href="#">Products</a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">Collections</a>
                </li>
                {/* Add more product links as needed */}
              </ul>
            </div>
            <div className="footer-links-section">
              <h2 className="footer-links-header">Support</h2>
              <ul className="footer-list">
                <li className="footer-link-item">
                  <a className="footer-link" href="#">Help Center</a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">Contact Us</a>
                </li>
                {/* Add more support links as needed */}
              </ul>
            </div>
            <div className="footer-links-section">
              <h2 className="footer-links-header">Team</h2>
              <ul className="footer-list">
                <li className="footer-link-item">
                  <a className="footer-link" href="#">About Us</a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">Members</a>
                </li>
                {/* Add more company links as needed */}
              </ul>
            </div>
            <div>
            <a href="#" className="Join"> Join Madristagram </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-container footer-container-bottom">
              <ul className="footer-list footer-list-secondary">
                <li>
                  <a href="#">
                    <img
                      src="/path/to/x-icon.png"
                      width="16"
                      height="16"
                      loading="lazy"
                      alt="X icon"
                    />
                    <span className="sr-only">Madristagram on X</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/path/to/facebook-icon.png"
                      width="18"
                      height="18"
                      loading="lazy"
                      alt="Facebook icon"
                    />
                    <span className="sr-only">Madristagram on Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/path/to/instagram-icon.png"
                      width="18"
                      height="18"
                      loading="lazy"
                      alt="Instagram icon"
                    />
                    <span className="sr-only">Madristagram on Instagram</span>
                  </a>
                </li>
                {/* Add more social media links as needed */}
              </ul>
              <ul className="footer-list footer-list-secondary">
                <li>© {new Date().getFullYear()} Madristagram, Inc.</li>
                <li>
                  <a className="footer-link footer-link-secondary" href="#">Terms</a>
                </li>
                <li>
                  <a className="footer-link footer-link-secondary" href="#">Privacy</a>
                  (<a className="footer-link footer-link-secondary" href="#"
                    >Updated 08/2022</a
                  >)
                </li>
                <li>
                  <a className="footer-link footer-link-secondary" href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      );
    };

export default MadristagramFooter;
