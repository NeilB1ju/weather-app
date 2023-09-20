// eslint-disable-next-line react/prop-types
function WeatherCard({ location }) {
  // async function APICall(location) {
  //   const API_KEY = '86452b43cad1490a8dc192417230709';
  //   const baseURL = 'http://api.weatherapi.com/v1';

  //   const url = `${baseURL}/current.json?key=${API_KEY}&q=${location}`;
  //   const call = await fetch(url);
  //   const data = await call.json();
  //   console.log(data);
  // }

  return (
    <div className="card-container">
      <h1>{location}</h1>
    </div>
  );
}
export default WeatherCard;
