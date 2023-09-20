import { useState } from 'react';
import WeatherCard from './WeatherCard';

function Main() {
  const [location, setLocation] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  //Value of setForm gets set to false by the end of the function call. So it is never true and hence the component does not get rendered.
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setFormSubmitted(true);
    if (location) {
      await APICall(location);
    }
    setLocation('');
    setFormSubmitted(false);
  };

  async function APICall(location) {
    const API_KEY = '86452b43cad1490a8dc192417230709';
    const baseURL = 'http://api.weatherapi.com/v1';

    const url = `${baseURL}/current.json?key=${API_KEY}&q=${location}`;
    const call = await fetch(url);
    const data = await call.json();
    console.log(data);
  }

  return (
    <main>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={handleInput}
          name="location"
        />
        <button type="submit">Search</button>
      </form>
      {formSubmitted ? <WeatherCard location={location} /> : null}
    </main>
  );
}
export default Main;
