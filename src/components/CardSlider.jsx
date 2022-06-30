import Card from "./Card";
import katieImage from "../images/katie.jpeg";
import "../styles/CardSlider.css";

function CardSlider(props) {
  console.log("in the card slider component");
  return (
    <div className="card-slider">
      {props.cards.map((card) => (
        <Card
          image={katieImage}
          rating={card.rating}
          desc={card.desc}
          price={card.price}
        />
      ))}
    </div>
  );
}

export default CardSlider;
