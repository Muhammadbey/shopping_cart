import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { productsReducer } from "./slices/productsSlice";
const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
});
export default rootReducer;
