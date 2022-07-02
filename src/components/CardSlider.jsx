import React from 'react';
import Card from './Card';
import katieImage from '../images/katie.jpeg';
import '../styles/CardSlider.css';

function CardSlider({ ...cards }) {
  return (
    <div className="card-slider">
      {cards.map((card) => (
        <Card
          image={katieImage}
          rating={card.rating}
          desc={card.desc}
          price={card.price}
          availableSpots={card.availableSpots}
        />
      ))}
    </div>
  );
}

export default CardSlider;
