import React from 'react';
import './styles.css';
import  HeroSecrion from './HeroSection'
import About from './About';
const HomePage = ()=> {
    return( <div>
      <h1>Little Lemon Restaurant</h1>
      <HeroSecrion />
      <About />
      </div>
    );
}
export default HomePage;