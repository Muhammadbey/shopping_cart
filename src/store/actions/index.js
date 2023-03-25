import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./thunks/authThunk";
import { getProductsThunk } from "./thunks/productsThunk";

export const AsyncThunks = {
  login: createAsyncThunk("login", loginThunk),
  register: createAsyncThunk("register", registerThunk),
  getProducts: createAsyncThunk("getProducts", getProductsThunk),
};
