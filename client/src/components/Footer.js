import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
        <span className='footerlogo'>Mossy Lab</span>
          <p>Where Nature Meets Creativity..</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com" className="social-icon">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.pinterest.com" className="social-icon">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: mossylab@example.com</p>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
