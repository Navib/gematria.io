import {
  GOT_CHARACTER_EVENT,
  GET_CHARACTER_EVENT_ERROR,
  SENT_SEARCH_TERM,
  SEND_SEARCH_TERM_ERROR
} from './';

const INITIAL_STATE = {
  searchTerms: [],
  currentSearch: ''
};

const searchTermReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOT_CHARACTER_EVENT:
      return {
        ...state,
        currentSearch: action.data.payload
      };

    case GET_CHARACTER_EVENT_ERROR:
      return { ...state, errorMessage: action.error };

    case SENT_SEARCH_TERM:
      return {
        ...state,
        searchTerms: [action.term.payload, ...state.searchTerms]
      };

    case SEND_SEARCH_TERM_ERROR:
      return { ...state, errorMessage: action.error };

    default:
      return state;
  }
};

export default searchTermReducer;
