/* eslint-disable react/prop-types */
function WeatherCard({
  location,
  temperature,
  feelsLikeTemperature,
  humidity,
  windSpeed,
}) {
  return (
    <div className="container">
      <div className="card-container">
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
