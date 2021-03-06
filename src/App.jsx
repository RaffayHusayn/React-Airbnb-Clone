import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import cards from './Data/CardData';
import CardSlider from './components/CardSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardSlider cards={cards} /> 
    </div>
  );
}

export default App;
