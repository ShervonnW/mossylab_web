import React from 'react';
import './GallerySection.css';
import work1 from '../image/work1.jpg'
import work2 from '../image/work2.jpg'
import work3 from '../image/work3.jpg'
import work4 from '../image/work4.jpg'
import work5 from '../image/work5.jpg'
import work6 from '../image/work6.jpg'

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2>A FEW OF OUR NEWEST & MOST POPULAR DESIGNS</h2>
      <div className="gallery-images">
        <img src={work1} alt="Design 1" className="gallery-images" />
        <img src={work2} alt="Design 2" className="gallery-images" />
        <img src={work3} alt="Design 3" className="gallery-images" />
      </div>
      <div className="gallery-images">
        <img src={work4} alt="Design 4" className="gallery-images" />
        <img src={work5} alt="Design 5" className="gallery-images" />
        <img src={work6} alt="Design 6" className="gallery-images" />
      </div>
      <button className="btn btn-secondary">View All</button>
    </section>
  );
};

export default GallerySection;
