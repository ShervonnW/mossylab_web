import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Custom Designs</h3>
            <p>Create your own unique moss landscapes.</p>
          </div>
          <div className="service-item">
            <h3>High Quality Materials</h3>
            <p>We use only the best materials.</p>
          </div>
          <div className="service-item">
            <h3>Workshops</h3>
            <p>Join our workshops to create your own moss terrariums.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
