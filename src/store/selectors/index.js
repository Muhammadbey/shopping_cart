export const getProductsList = (state) => state.productsReducer.products;

export const getBasketProductsItem = (state) => state.basketReducer.products;

export const getUser = (state) => state.userReducer.user;

export const getUserError = (state) => state.userReducer.error;

export const getIsLoggedIn = (state) => state.userReducer.isLoggedIn;

export const getIsLoading = (state) => state.userReducer.loading;
