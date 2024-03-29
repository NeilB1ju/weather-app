export default (state, action) => {
  switch (action.type) {
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.location != action.payload
        ),
      };

    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };

    case 'ADD_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
