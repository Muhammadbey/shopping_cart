import { api } from "./axios";

export const authApi = {
  register: (userDetails) => {
    return api.post("/auth/register", userDetails);
  },

  login: (userDetails) => {
    return api.post("/auth/login", userDetails);
  },
};
