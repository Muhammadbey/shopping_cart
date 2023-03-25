const endpoints = {
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  products: {
    products: "/products",
    product: (prodId) => `/product/${prodId}`,
  },
};

export default endpoints;
