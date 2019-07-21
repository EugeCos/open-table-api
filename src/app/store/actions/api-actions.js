import { fetchCommon } from "../../services/api";
import { FETCH_STATS } from "../reducers/reducer-constants";
import { FETCH_RESTAURANTS } from "../reducers/reducer-constants";

export const fetchStats = () => dispatch => {
  return fetchCommon()(dispatch, FETCH_STATS);
};

export const fetchRestaurants = (
  searchValue,
  searchOption,
  perPage,
  pageNumber
) => dispatch => {
  const option = searchOption === "City" ? "city" : "name";
  return fetchCommon(searchValue, option, perPage, pageNumber)(
    dispatch,
    FETCH_RESTAURANTS
  );
};
