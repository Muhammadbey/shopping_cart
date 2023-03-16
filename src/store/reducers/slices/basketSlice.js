import { createSlice } from "@reduxjs/toolkit";
import mockProducts from "../../../mockProducts";

const initialState = {
  products: [mockProducts],
  totalSum: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action) => {
      state.totalSum = state.totalSum + action.payload.price;
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    remove: (state, action) => {
      state.totalSum = state.totalSum - action.payload.price;

      state.products = state.products.filter(
        (basketItem) => basketItem.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      state.products = state.products.map((basketItem) => {
        if (basketItem.id === action.payload.id) {
          return { ...basketItem, quantity: basketItem.quantity + 1 };
        }
        return basketItem;
      });

      state.totalSum = state.totalSum + action.payload.price;
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products.map((basketItem) => {
        if (basketItem.id === action.payload.id) {
          return { ...basketItem, quantity: basketItem.quantity - 1 };
        }
        return basketItem;
      });
      state.totalSum = state.totalSum - action.payload.price;
    },
  },
});

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
