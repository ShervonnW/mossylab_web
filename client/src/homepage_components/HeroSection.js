import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
        <div className='hero-box'>
            <div className="hero-content">
                <h1>Experience Nature's Tranquility Indoors</h1>
                <p>Mossy Lab offers creative and relaxing DIY workshops for nature enthusiasts and craft lovers.</p>
                <Link to="/contact">
                  <button className="btn btn-primary">Join us for a Workshop!</button>
                </Link>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
