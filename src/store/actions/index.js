import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks/authThunk";

export const AsyncThunks = {
  login: createAsyncThunk("login", loginThunk),
};
