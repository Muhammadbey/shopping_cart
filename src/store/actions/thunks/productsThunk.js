import { api } from "../../../api/axios";
import endpoints from "../../../api/endpoints";

export const getProductsThunk = async (userDetails, { rejectWithValue }) => {
  try {
    const response = await api.get(endpoints.products.products);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
};
