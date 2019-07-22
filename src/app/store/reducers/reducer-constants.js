// Add API call status
export const getActionTypes = actionKey => {
  return {
    FETCHING: `${actionKey}_fetching`,
    FULFILLED: `${actionKey}_fulfilled`,
    REJECTED: `${actionKey}_rejected`
  };
};

// API actions
export const FETCH_STATS = "fetch_stats";
export const FETCH_RESTAURANTS = "fetch_restaurants";

// User actions
export const UPDATE_PAGE = "update_page";
export const CLEAR_RESTAURANTS_LIST = "clear_restaurants_list";
