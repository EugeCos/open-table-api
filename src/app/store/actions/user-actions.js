import {
  UPDATE_PAGE,
  CLEAR_RESTAURANTS_LIST
} from "../reducers/reducer-constants";

export const updatePage = pageName => {
  return {
    type: UPDATE_PAGE,
    payload: pageName
  };
};
export const clearRestaurantsList = () => {
  return {
    type: CLEAR_RESTAURANTS_LIST
  };
};
