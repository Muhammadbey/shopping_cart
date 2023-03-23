import { createSlice } from "@reduxjs/toolkit";
import { AsyncThunks } from "../../actions";

const initialState = {
  user: {},
  isLogined: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AsyncThunks.login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AsyncThunks.login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLogined = true;
      state.error = null;
    });
    builder.addCase(AsyncThunks.login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
