import airbnbLogo from "../images/airbnb-logo.png";
import '../styles/Navbar.css';
function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnbLogo} alt="nav-logo"  />
        </nav>
    )
}

export default Navbar;