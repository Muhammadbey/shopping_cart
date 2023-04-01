import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { productsReducer } from "./slices/productsSlice";
import { productReducer } from "./slices/productsDetailsSlice";
import { userReducer } from "./slices/userSlice";

const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  basketReducer,
  userReducer,
});
export default rootReducer;
