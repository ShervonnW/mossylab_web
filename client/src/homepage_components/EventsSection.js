import React from 'react';
import './EventsSection.css';

const ServicesSection = () => {
  return (
    <section className="events-section">
      <h2>Our Events</h2>
      <div className="events-container">
        <div className="event-card">
          <h3>Corporate Team Building</h3>
          <p>Strengthen your team's bonds with our unique moss terrarium workshops.</p>
        </div>
        <div className="event-card">
          <h3>Private Events</h3>
          <p>Host your private gatherings with a touch of nature and creativity.</p>
        </div>
        <div className="event-card">
          <h3>Holiday Celebrations</h3>
          <p>Celebrate holidays with custom moss terrarium activities for all ages.</p>
        </div>
      </div>
    </section>
  );

};

export default ServicesSection;
