const endpoints = {
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  user: {
    users: "/users",
    profile: "/users/myprofile",
  },
  products: {
    products: "/products",
    product: (prodId) => `/products/${prodId}`,
  },
  orders: {
    orders: "/orders",
    order:  (orderId) => `/orders/${orderId}`,
  },
};

export default endpoints;
