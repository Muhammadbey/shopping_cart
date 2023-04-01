import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return error;
  }
);
