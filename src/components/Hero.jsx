import React from 'react';
import heroCover from '../images/airbnb-hero.png';
import '../styles/Hero.css';

const heroText = 'Join unique interactive activities led by one-of-a-kind hosts-- all without leaving home.';
function Hero() {
  return (
    <section className="hero-container">
      <img src={heroCover} alt="hero-cover" className="hero-image" />
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-text">{heroText}</p>
    </section>
  );
}

export default Hero;
