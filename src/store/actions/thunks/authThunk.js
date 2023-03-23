import { authApi } from "../../../api/auth";

export const loginThunk = async (userDetails, { rejectWithValue }) => {
  try {
    const response = await authApi.login(userDetails);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
};
