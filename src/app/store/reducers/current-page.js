import { UPDATE_PAGE } from "./reducer-constants";

export default function currentPage(
  state = { name: "" },
  action = { type: "", payload: "" }
) {
  if (action.type === UPDATE_PAGE) {
    return { name: action.payload };
  } else return state;
}
