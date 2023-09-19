import { useState } from 'react';
import WeatherCard from './WeatherCard';

function Main() {
  const [location, setLocation] = useState('');

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location != '') {
      <WeatherCard location={location} />;
    } else {
      return <h1>Invalid Location</h1>;
    }
    // const formData = new FormData(e.currentTarget);
    // const location = formData.get('location');
    // if (location != '') {
    //   e.currentTarget.reset();
    // }
  };

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
    </main>
  );
}
export default Main;
