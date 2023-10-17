import weatherIcon from '../assets/weather.svg';
import starIcon from '../assets/star.svg';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="header-title">
          <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
          <Link to="/" className="header-text">
            Weather App
          </Link>
        </div>
        <div className="header-title">
          <img src={starIcon} alt="star" className="star-icon" />
          <Link to="/favorites" className="header-text">
            Favorites
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
