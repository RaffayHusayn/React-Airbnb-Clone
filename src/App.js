import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import cards from "./Data/Card.js";
import Card from './components/Card';
import './App.css';



// import katieImage from './images/katie.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Hero /> */}
      {/* <Card 
      image={katieImage}
      rating={{stars: 5.0, totalratings: 6, location: "USA"}}
      desc="life lesson with raffay"
      price="400"
      /> */}

      {cards.map(card=>(
        <Card
            image={card.image}
            rating={card.rating}
            desc={card.desc}
            price={card.price}
        />
      ))}
    </div>
  );
}

export default App;
