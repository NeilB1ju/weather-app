/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favorites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
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
