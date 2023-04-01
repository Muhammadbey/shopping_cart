import { api } from "../../../api/axios";
import endpoints from "../../../api/endpoints";

export const getProductsThunk = async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(endpoints.products.products);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
};

export const getProductDetailsThunk = async (prodId, { rejectWithValue }) => {
  try {
    const response = await api.get(endpoints.products.product(prodId));
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
};
