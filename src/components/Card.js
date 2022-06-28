import katieImage from '../images/katie.jpeg';
import starImage from '../images/star.png';
import '../styles/Card.css';

function Card(){
    return(
        <div className="card">
            <img src={katieImage} alt="card-person" className="card-image" />
            <div className="card-container">
                <div className="card-rating">
                    <img src={starImage} alt="star-rating" className="card-star" />
                    <p className="card-rating-text">5.0<span className='gray'>(6)•USA</span> </p>
                </div>
                <p className="card-description">Life lesson with Katie</p>
                <p className="card-price"><b>From $135</b>/ person</p>
            </div>
        </div>
    )
}

export default Card;