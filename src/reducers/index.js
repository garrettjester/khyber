import {combineReducers} from "redux";
import authReducer from "./auth";
import darkMode from "./darkMode";
import menu from "./menu"

export default combineReducers({
  auth: authReducer,
  menu: menu,
  darkMode: darkMode
})