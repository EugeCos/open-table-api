import { getActionTypes } from "../store/reducers/reducer-constants";

export const fetchCommon = (
  name,
  cityOrRestaurant,
  perPage,
  pageNumber
) => async (
  dispatch = ({ type = "", payload = null }) => {},
  actionKey = ""
) => {
  // 1. Extract action key and dispatch fetching (display spinner if needed)
  const ACTION_TYPE = getActionTypes(actionKey);
  dispatch({ type: ACTION_TYPE.FETCHING });

  // 2. Construct URL
  let url;
  if (!!cityOrRestaurant) {
    url = `https://opentable.herokuapp.com/api/restaurants?${cityOrRestaurant}=${name}&per_page=${perPage}&page=${pageNumber}`;
  } else url = "https://opentable.herokuapp.com/api/stats";
  //   3. Call API
  const response = await fetch(url);
  const jsonData = await response.json();

  if (response.ok) {
    // 4. Send data to store
    return dispatch({ type: ACTION_TYPE.FULFILLED, payload: jsonData });
  } else {
    // 5. Send error message to store
    return dispatch({
      type: ACTION_TYPE.REJECTED,
      payload: response.statusText
    });
  }
};
