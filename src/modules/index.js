import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import users from "./sample";

const rootReducer = combineReducers({
  counter,
  sample,
  users,
});

export default rootReducer;
