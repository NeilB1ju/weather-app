import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import WeatherCard from './WeatherCard';

function Favorites() {
  const { favorites } = useContext(GlobalContext);
  return (
    <main>
      <header className="favorites-header">
        <h1>Favorites</h1>
      </header>
      <div className="card-grid">
        {favorites.map((favorite) => {
          return (
            <WeatherCard
              key={favorite.location}
              location={favorite.location}
              temperature={favorite.temperature}
              feelsLikeTemperature={favorite.feelsLikeTemperature}
              humidity={favorite.humidity}
              windSpeed={favorite.windSpeed}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Favorites;
