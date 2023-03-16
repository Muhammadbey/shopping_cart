import { createSlice } from "@reduxjs/toolkit";
import mockProducts from "../../../mockProducts";
const initialState = {
  products: mockProducts,
};
export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
});
export const productActions = productSlice;
export const productsReducer = productSlice.reducer;
