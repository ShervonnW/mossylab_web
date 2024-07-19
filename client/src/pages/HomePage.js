import React from 'react';
import Header from '../homepage_components/Header';
import HeroSection from '../homepage_components/HeroSection';
import AboutSection from '../homepage_components/AboutSection';
import ServicesSection from '../homepage_components/ServicesSection';
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
        <ServicesSection />
        <CallToAction />
        <GallerySection />        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
