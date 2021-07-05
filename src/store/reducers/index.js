import { combineReducers } from "redux";
import albumReducer from "./albumReducer.js";
const rootReducer = combineReducers({ albumReducer });

export default rootReducer;
