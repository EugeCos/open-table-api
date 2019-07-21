import { UPDATE_PAGE } from "../reducers/reducer-constants";

export const updatePage = pageName => {
  return {
    type: UPDATE_PAGE,
    payload: pageName
  };
};
