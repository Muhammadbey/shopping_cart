import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./thunks/authThunk";
import { getProductDetailsThunk, getProductsThunk } from "./thunks/productsThunk";
import { getMyProfileThunk } from "./thunks/userThunk";

export const AsyncThunks = {
  login: createAsyncThunk("login", loginThunk),
  register: createAsyncThunk("register", registerThunk),
  getProducts: createAsyncThunk("getProducts", getProductsThunk),
  getMyProfile: createAsyncThunk("getMyProfile", getMyProfileThunk),
  getProductDetails: createAsyncThunk("getProductDetails", getProductDetailsThunk)
};
