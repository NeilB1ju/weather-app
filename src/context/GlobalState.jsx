/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favorites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  useEffect(() => {
    let storedFavorites = localStorage.getItem('favorites');
    storedFavorites = JSON.parse(storedFavorites);
    if (storedFavorites && storedFavorites.length != 0) {
      for (let i = 0; i < storedFavorites.length; i++) {
        APICall(storedFavorites[i].location);
      }
    }
  }, []);

  //API call to ensure that the data being provided for the favorites is current data and not past data
  async function APICall(location) {
    const API_KEY = '86452b43cad1490a8dc192417230709';
    const baseURL = 'http://api.weatherapi.com/v1';

    const url = `${baseURL}/current.json?key=${API_KEY}&q=${location}`;
    const call = await fetch(url);
    const data = await call.json();
    const favoriteObject = {
      location: data.location.name,
      temperature: data.current.temp_c,
      feelsLikeTemperature: data.current.feelslike_c,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
    };
    addFavorite(favoriteObject);
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteFavorite(location) {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: location,
    });
  }

  function addFavorite(location) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: location,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        deleteFavorite,
        addFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
