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
          addFavorite(storedFavorites[i]);
        }
      }
    }, []);

  // const callLocalStorage = () => {
  //   let storedFavorites = localStorage.getItem('favorites');
  //   storedFavorites = JSON.parse(storedFavorites);
  //   if (storedFavorites && storedFavorites.length != 0) {
  //     for (let i = 0; i < storedFavorites.length; i++) {
  //       addFavorite(storedFavorites[i]);
  //     }
  //   }
  // };
  // callLocalStorage();

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
