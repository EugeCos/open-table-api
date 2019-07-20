import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./store/reducers/reducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(combineReducers({ ...reducers }), middleware);
