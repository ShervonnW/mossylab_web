import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className={`logo ${isOpen ? 'hidden' : ''}`}>
            <span className="logo-text">MOSSY LAB</span>
            <img src='../image/logo2.png' alt="Mossy Lab Logo" className="logo-image" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/terrariums" className="nav-link" onClick={toggleMenu}>Terrariums</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
