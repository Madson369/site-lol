import { combineReducers } from "redux";
import getDataReducer from "./GetData";
import defRegionReducer from "./DefRegion";
import getMatchReducer from "./GetMatch";

const allReducers = combineReducers({
  data: getDataReducer,
  region: defRegionReducer,
  match: getMatchReducer,
});

export default allReducers;
