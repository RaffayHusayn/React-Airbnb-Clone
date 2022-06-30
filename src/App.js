import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import cards from "./Data/Card.js";
import CardSlider from './components/CardSlider';
import './App.css';




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
      <CardSlider cards={cards} />
    </div>
  );
}

export default App;
