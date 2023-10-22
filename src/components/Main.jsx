import { useState } from 'react';
import WeatherCard from './WeatherCard';

function Main() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleInput(e) {
    setLocation(e.target.value);
  }

  function handleClick() {
    setLoaded(false);
    const currentLocation = location;
    setLocation('');
    APICall(currentLocation);
  }

  async function APICall(location) {
    const API_KEY = '86452b43cad1490a8dc192417230709';
    const baseURL = 'http://api.weatherapi.com/v1';

    const url = `${baseURL}/current.json?key=${API_KEY}&q=${location}`;
    const call = await fetch(url);
    const data = await call.json();
    if (data.location) {
      setData(data);
    } else {
      setError(true);
      setData(null);
    }
    setLoaded(true);
  }

  return (
    <main>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name"
          name="location"
          onChange={handleInput}
          value={location}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
      {data && loaded && (
        <WeatherCard
          location={data.location.name}
          temperature={data.current.temp_c}
          feelsLikeTemperature={data.current.feelslike_c}
          humidity={data.current.humidity}
          windSpeed={data.current.wind_kph}
        />
      )}
      {!data && loaded && error && (
        <div className="container">
          <div className="card-container">
            <h1 className="card-content">Location not found</h1>
          </div>
        </div>
      )}
    </main>
  );
}
export default Main;
