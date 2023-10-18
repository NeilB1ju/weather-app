import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import favorited from '../assets/favorited.svg';
import not_favorited from '../assets/not_favorited.svg';

/* eslint-disable react/prop-types */
function WeatherCard({
  location,
  temperature,
  feelsLikeTemperature,
  humidity,
  windSpeed,
}) {
  const [favorite, setFavorite] = useState(false);

  const { addFavorite, deleteFavorite, favorites } = useContext(GlobalContext);
  const locationObject = {
    location,
    temperature,
    feelsLikeTemperature,
    humidity,
    windSpeed,
  };

  const handleClick = () => {
    setFavorite(!favorite);
    const doesObjectExist = favorites.some((obj) => obj.location === location);
    if (!doesObjectExist) {
      addFavorite(locationObject);

      //Pushing the new item into local storage
      let storedFavorites = localStorage.getItem('favorites');
      storedFavorites = JSON.parse(storedFavorites);
      storedFavorites.push(locationObject);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    } else {
      deleteFavorite(location);

      //Removing the item from local storage
      let storedFavorites = localStorage.getItem('favorites');
      storedFavorites = JSON.parse(storedFavorites);
      storedFavorites = storedFavorites.filter(
        (favorite) => favorite.location != location
      );
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    }
  };

  useEffect(() => {
    //Pushing an empty array into local storage
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites == null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }

    //Used to check if the card being generated is of a favorited location or not
    const doesObjectExist = favorites.some((obj) => obj.location === location);
    if (doesObjectExist) {
      setFavorite(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="card-container">
        <button className="favorite-button" onClick={handleClick}>
          <img
            src={favorite ? favorited : not_favorited}
            alt="Star"
            className="favorite-icon"
          />
        </button>
        <h1 className="card-header">{location}</h1>
        <h1 className="card-content">{temperature} °C</h1>
        <h2 className="card-content">Feels Like: {feelsLikeTemperature} °C</h2>
        <h2 className="card-content">Humidity: {humidity} %</h2>
        <h2 className="card-content">Wind Speed: {windSpeed} Km</h2>
      </div>
    </div>
  );
}
export default WeatherCard;
