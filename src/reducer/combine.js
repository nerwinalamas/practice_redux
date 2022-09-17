import isVerify from "./isVerify";
import countReducer from "./index";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  countReducer,
  isVerify,
});

export default allReducers;
