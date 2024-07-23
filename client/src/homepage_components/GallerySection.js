import React from 'react';
import { Link } from 'react-router-dom';
import './GallerySection.css';

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2>A FEW OF OUR NEWEST & MOST POPULAR DESIGNS</h2>
      <div className="gallery-images">
        <img src='../image/work1.jpg' alt="Design 1" className="gallery-image" />
        <img src='../image/work2.jpg' alt="Design 2" className="gallery-image" />
        <img src='../image/work3.jpg' alt="Design 3" className="gallery-image" />
      </div>
      <div className="gallery-images">
        <img src='../image/work4.jpg' alt="Design 4" className="gallery-image" />
        <img src='../image/work5.jpg' alt="Design 5" className="gallery-image" />
        <img src='../image/work6.jpg' alt="Design 6" className="gallery-image" />
      </div>
      <div className="gallery-btn-container">
        <Link to="/gallery">
          <button className="gallery-btn">View All</button>
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
