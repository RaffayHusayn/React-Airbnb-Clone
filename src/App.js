import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';



import katieImage from './images/katie.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Hero /> */}
      <Card 
      image={katieImage}
      rating="5.0"
      ratingtotal="6"
      location ="USA"
      desc="life lesson with raffay"
      price="400"
      />
    </div>
  );
}

export default App;
