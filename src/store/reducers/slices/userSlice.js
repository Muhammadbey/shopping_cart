import { createSlice } from "@reduxjs/toolkit";
import { AsyncThunks } from "../../actions";

const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AsyncThunks.login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AsyncThunks.login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload?.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(AsyncThunks.login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    
    builder.addCase(AsyncThunks.getMyProfile.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AsyncThunks.getMyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(AsyncThunks.getMyProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
