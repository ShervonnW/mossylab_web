import React, { useEffect } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../terrariumspage_components/TerrariumsPage.css';
import steps from '../terrariumspage_components/steps.jpg';
import gifs from '../terrariumspage_components/plant3.gif';
const TerrariumsPage = () => {
  // Add useEffect to scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main className="terrariums-page">
        <h1>How to DIY a Terrarium</h1>
        <div className="content-container">
          <div className="image-container">
            <img src={steps} alt="Steps to make a terrarium" className="steps-image" />
          </div>
          <div className="text-box">
            <h2>Step-by-step Instructions </h2>
            <p>1. Choose a suitable container. Put approximately one inch of sand at the bottom of the container.</p>
            <p>2. Add a few rocks. Then cover with pebbles in order to fill the spaces between them.</p>
            <p>3. Sprinkle the activated carbon on top of the rocks. Afterwards, leave a coat of sphagnum moss. </p>
            <p>4. Next, place some Akadama Soil and place the potting soil on top of the Akadama Soil.</p>
            <p>5. Decorate your terrarium with the accent rocks, sand, moss, and plants.</p>
            <div className="gifs-image-container">
                <img src={gifs} alt="gifs" className="gifs-image" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TerrariumsPage;
