export const initialState = {
  genres: [],
  artists: [],
  list: {},
  similar: {},
  details: {},
  loading: false,
  error: false
};

export const reducer = (state, action) => {
  const loadingState = { ...state, loading: true };
  const errorState = { ...state, loading: false, error: true };

  switch (action.type) {
    case "LOADING":
      return loadingState;
    case "ERROR":
      return errorState;
    case "GET_GENRES_SUCCESS":
      return { ...state, loading: false, genres: action.payload };
    case "RESET_GENRES":
      return { ...state, genres: [] };
    case "GET_ARTISTS_SUCCESS":
      return { ...state, loading: false, artists: action.payload };
    case "ADD_TO_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: { ...action.payload }
        }
      };
    case "REMOVE_TO_LIST":
      const { [action.payload.id]: value, ...list } = state.list;
      return { ...state, list };
    case "GET_ARTIST_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
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
