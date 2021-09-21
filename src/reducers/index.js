import { combineReducers } from "redux";
import getDataReducer from "./GetData";

const allReducers = combineReducers({
  data: getDataReducer,
});

export default allReducers;
