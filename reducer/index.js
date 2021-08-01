import { combineReducers } from "redux";
import addProduct from "./reducer";
import isLogin from "./LoginReducer";
import getUsername from "./UsernameReducer";

const rootReducer = combineReducers({
  addProduct,
  isLogin,
  getUsername,
});

export default rootReducer;
