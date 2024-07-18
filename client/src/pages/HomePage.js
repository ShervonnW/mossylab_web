import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import '../components/HeroSection.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="homepage">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
