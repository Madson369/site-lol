import { combineReducers } from "redux";
import counterReducer from "./counter";
import getDataReducer from "./GetData";

const allReducers = combineReducers({
  counter: counterReducer,
  data:getDataReducer,
});

export default allReducers;
