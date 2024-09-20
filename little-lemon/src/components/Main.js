import React from 'react';
import './styles.css';
import HeroSection from './HeroSection';  // Fixed typo
import Highlights from './Highlights';
import About from './About';
import Testimonials from './Testimonials';
const Main = () => {
  return (
    <div className="main-content">
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
};

export default Main;

 