import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_WORD
} from "../actions/types";

const initialState = {
  searchWord: "",
  searchResults: []
};

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload
      }
    case GET_SEARCH_WORD:
      return {
        ...state,
        searchWord: payload
      }

    default:
      return state;
  }
}