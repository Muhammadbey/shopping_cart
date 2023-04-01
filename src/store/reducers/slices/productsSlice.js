import { createSlice } from "@reduxjs/toolkit";
import { AsyncThunks } from "../../actions";

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};
export const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AsyncThunks.getProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.products = [];
    });
    builder.addCase(AsyncThunks.getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(AsyncThunks.getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
