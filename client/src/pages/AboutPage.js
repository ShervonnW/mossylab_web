import React from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../aboutpage_components/AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="about-page">
        <section className="about-intro">

          <h1>About Mossy Lab</h1>
          <p>Welcome to Mossy Lab, where nature meets creativity. Our mission is to bring the beauty and tranquility of nature into your home or office through custom moss terrariums. Our innovative workshops allow you to create your own moss landscapes, providing both a therapeutic and artistic experience.</p>
        </section>
        <section className="vision-mission">
          <div className="vision">
            <h2> Our Vision </h2>
            <p>To become a leading provider of therapeutic and creative nature-inspired experiences, transforming how people interact with and appreciate the natural world.</p>
          </div>
          <div className="mission">
            <h2> Our Mission </h2>
            <p>We aim to cultivate a community that values emotional wellness and environmental sustainability. We offer innovative and personalized moss micro-landscape products and workshops to bring the calming and healing power of nature into every home and workspace, enhancing the quality of life for our customers.</p>
          </div>
        </section>
        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src='../image/han.jpg' alt="Team Member 1" />
              <h3>Han Xu</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src='../image/xy.jpg' alt="Team Member 2" />
              <h3>Xinyi Liu</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src='../image/zt.jpg' alt="Team Member 3" />
              <h3>Ming Zhu</h3>
              <p>Founder & CFO</p>
            </div>
            <div className="team-member">
              <img src='../image/jy.jpg' alt="Team Member 3" />
              <h3>Bryan Wang</h3>
              <p>Founder & CTO</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;