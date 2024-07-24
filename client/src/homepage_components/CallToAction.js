import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Create Your Own Moss Terrarium?</h2>
        <Link to="/terrariums" className="btn btn-primary no-underline">Get Started</Link>
      </div>
    </section>
  );
};

export default CallToAction;
