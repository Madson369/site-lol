import { combineReducers } from "redux";
import getDataReducer from "./GetData";
import defRegionReducer from "./DefRegion";

const allReducers = combineReducers({
  data: getDataReducer,
  region: defRegionReducer,
});

export default allReducers;
