import { api } from "../../../api/axios";
import endpoints from "../../../api/endpoints";

export const getMyProfileThunk = async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(endpoints.user.profile);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
};
