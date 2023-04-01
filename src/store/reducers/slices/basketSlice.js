import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  price: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action) => {
      state.price = state.price + action.payload.price;

      state.products = [
        ...state.products,
        { id: action.payload.id, amount: 1 },
      ];
    },
    remove: (state, action) => {
      state.price = state.price - action.payload.price;

      state.products = state.products.filter(
        (basketItem) => basketItem.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      state.products = state.products.map((basketItem) => {
        if (basketItem.id === action.payload.id) {
          return { ...basketItem, amount: basketItem.amount + 1 };
        }
        return basketItem;
      });

      state.price = state.price + action.payload.price;
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products.map((basketItem) => {
        if (basketItem.id === action.payload.id) {
          return { ...basketItem, amount: basketItem.amount - 1 };
        }
        return basketItem;
      });
      state.price = state.price - action.payload.price;
    },
    clear: (state, action) => {
      state.products = [];
      state.price = 0;
    },
  },
});

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
