import heroCover from '../images/airbnb-hero.png';
import '../styles/Hero.css';

function Hero(){
    return(
        <div className='outside-hero-container'>
            <div className='hero-container'>
                <img src={heroCover} alt='hero-cover' className='hero-image'/>
            </div>
            <h1 className='hero-heading'>Online Experiences</h1>
        </div>
    )
}

export default Hero;