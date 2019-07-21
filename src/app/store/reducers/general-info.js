import { getActionTypes, FETCH_STATS } from "./reducer-constants";

const initialState = {
  countries: "",
  cities: "",
  restaurants: ""
};

export default function generalInfo(
  state = { fetching: false, error: "", data: { ...initialState } },
  action = { type: "", payload: "" }
) {
  const REDUCER_STATS = getActionTypes(FETCH_STATS);
  switch (action.type) {
    case REDUCER_STATS.FETCHING:
      return { ...state, fetching: true };
    case REDUCER_STATS.FULFILLED:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    case REDUCER_STATS.REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
}
