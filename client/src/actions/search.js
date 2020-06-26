import axios from "axios";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_WORD,
  SEARCH_ERROR
} from "./types";

export const getSearch = (userSearch, history) => async dispatch => {
  try {
    //{userSearch}&maxResults=30`);
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}`);
    console.log(res.data.items);
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res.data.items
    });
    dispatch({
      type: GET_SEARCH_WORD,
      payload: userSearch
    });
    history.push("/searchresults");
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR
    });
  }
}