import { GOT_NAVIGATION, GET_NAVIGATION_ERROR } from './';

const INITIAL_STATE = {
  headers: {}
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_NAVIGATION:
      return {
        ...state,
        headers: action.response.data
      };

    case GET_NAVIGATION_ERROR:
      return { ...state, errorMessage: action.error };

    default:
      return state;
  }
};

export default headerReducer;
