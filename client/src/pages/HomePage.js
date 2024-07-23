import React from 'react';
import Header from '../homepage_components/Header';
import HeroSection from '../homepage_components/HeroSection';
import AboutSection from '../homepage_components/AboutSection';
import EventsSection from '../homepage_components/EventsSection';
import CallToAction from '../homepage_components/CallToAction';
import GallerySection from '../homepage_components/GallerySection';
import Footer from '../homepage_components/Footer';
import '../homepage_components/HeroSection.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="homepage">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CallToAction />
        <GallerySection />        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
