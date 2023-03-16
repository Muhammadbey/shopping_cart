import { api } from "./axios";

export const authApi = {
  register: (userDetails) => {
    api.post("/auth/register", userDetails);
  },

  login: (userDetails) => {
    api.post("/auth/login", userDetails);
  },
};
