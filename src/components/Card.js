import starImage from '../images/star.png';
import '../styles/Card.css';

function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt="card-person" className="card-image" />
            <div className="card-container">
                <div className="card-rating">
                    <img src={starImage} alt="star-rating" className="card-star" />
                    <p className="card-rating-text">{props.rating.stars}<span className='gray'>({props.rating.totalratings})•{props.rating.location}</span> </p>
                </div>
                <p className="card-description">{props.desc}</p>
                <p className="card-price"><b>${props.price}</b>/ person</p>
            </div>
        </div>
    )
}

export default Card;