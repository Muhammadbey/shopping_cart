import mockProducts from "../../mockProducts";

export const loadState = () => {
  try {
    return JSON.parse(window.localStorage.getItemt("state"));
  } catch (error) {}
};

export const savedState = loadState();

export const initialState = savedState || {
  products: mockProducts,
  basket: [],
  sum: 0,
};

export const SHOPPING_ACTION = {
  ADD: "ADD",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOPPING_ACTION.ADD:
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
        sum: state.sum + action.payload.price,
      };
    case SHOPPING_ACTION.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter(
          (basketItem) => basketItem.id !== action.payload.id
        ),
        sum: state.sum - action.payload.price,
      };

    case SHOPPING_ACTION.INCREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((prod) => {
          if (prod.id === action.payload.id) {
            return { ...prod, quantity: prod.quantity + 1 };
          }

          return prod;
        }),
        sum: state.sum + action.payload.price,
      };

    case SHOPPING_ACTION.DECREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((prod) => {
          if (prod.id === action.payload.id) {
            return { ...prod, quantity: prod.quantity - 1 };
          }
          return prod;
        }),
        sum: state.sum - action.payload.price,
      };

    default:
      return state;
  }
};
