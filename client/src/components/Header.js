import React from 'react';
import { Link } from 'react-router-dom';
import mossyLabLogo from '../image/logo2.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">MOSSY LAB</span>
          <img src={mossyLabLogo} alt="Mossy Lab Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
