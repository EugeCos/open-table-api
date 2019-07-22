import {
  getActionTypes,
  FETCH_RESTAURANTS,
  CLEAR_RESTAURANTS_LIST
} from "./reducer-constants";

const initialState = {
  total_entries: 0,
  per_page: 25,
  current_page: 1,
  restaurants: []
};

export default function restaurants(
  state = { fetching: false, error: "", data: { ...initialState } },
  action = { type: "", payload: "" }
) {
  const REDUCER_RESTAURANTS = getActionTypes(FETCH_RESTAURANTS);
  switch (action.type) {
    case REDUCER_RESTAURANTS.FETCHING:
      return { ...state, fetching: true };
    case REDUCER_RESTAURANTS.FULFILLED:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    case REDUCER_RESTAURANTS.REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case CLEAR_RESTAURANTS_LIST:
      return {
        ...state,
        data: { ...initialState }
      };
    default:
      return state;
  }
}
