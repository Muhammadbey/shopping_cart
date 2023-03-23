import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { productsReducer } from "./slices/productsSlice";
import { userReducer } from "./slices/userSlice";

const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  userReducer,
});
export default rootReducer;
