/* eslint-disable react/prop-types */
import React from 'react';
import starImage from '../images/star.png';
import '../styles/Card.css';

function Card({
  image, rating, desc, price, availableSpots,
}) {
  return (
    <div className="card">
      <img src={image} alt="card-person" className="card-image" />
      <div className="card-container">
        {availableSpots === 0 && <div className="card-tag">SOLD OUT</div>}
        <div className="card-rating">
          <img src={starImage} alt="star-rating" className="card-star" />
          <p className="card-rating-text">
            {rating.stars}
            <span className="gray">
              (
              {rating.totalratings}
              )•
              {rating.location}
            </span>
          </p>
        </div>
        <p className="card-description">{desc}</p>
        <p className="card-price">
          <b>
            $
            {price}
          </b>
          / person
        </p>
      </div>
    </div>
  );
}

export default Card;
