export const initialState = {
  genres: [],
  artists: [],
  list: {},
  similar: {},
  details: {},
  error: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_GENRES_SUCCESS":
      return { ...state, genres: action.payload };
    case "RESET_GENRES":
      return { ...state, genres: [] };
    case "GET_ARTISTS_SUCCESS":
      return { ...state, artists: action.payload };
    case "RESET_ARTISTS":
      return { ...state, artists: [] };
    case "ADD_TO_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: { ...action.payload }
        }
      };
    case "REMOVE_FROM_LIST":
      const { [action.payload.id]: value, ...list } = state.list;
      return { ...state, list };
    case "GET_ARTIST_DETAIL_SUCCESS":
      return {
        ...state,
        details: {
          ...state.details,
          [action.payload.id]: action.payload.detail
        }
      };
    case "GET_SIMILAR_SUCCESS":
      return {
        ...state,
        similar: {
          ...state.similar,
          [action.payload.id]: action.payload.similar
        }
      };
    default:
      return { ...state };
  }
};
