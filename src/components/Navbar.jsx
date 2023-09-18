import weatherIcon from '../assets/weather.svg';
import '../index.css';

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <img src={weatherIcon} alt="Weather Icon" />
        <h1>Weather App</h1>
      </div>
    </header>
  );
}
export default Navbar;
