import React, { useReducer } from "react";
import { initialState, reducer, SHOPPING_ACTION } from "../Reducer/Reducer";
import { AddButton, ButtonWrapper, ItemList } from "./style";

const ProductItem = ({ product }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const basketProduct = state.basket.find(
    (basketItem) => basketItem.id === product.id
  );
  const addToBasket = (product) => {
    dispatch({
      type: SHOPPING_ACTION.ADD,
      payload: product,
    });
  };

  const removeFromBasket = (product) => {
    dispatch({
      type: SHOPPING_ACTION.REMOVE_FROM_BASKET,
      payload: product,
    });
  };

  const incereaseQuantity = (product) => {
    dispatch({
      type: SHOPPING_ACTION.INCREASE_QUANTITY,
      payload: { price: product.price, id: product.id },
    });
  };

  const decereaseQuantity = (product) => {
    if (basketProduct.quantity === 1) {
      removeFromBasket(product);
      return;
    }
    dispatch({
      type: SHOPPING_ACTION.DECREASE_QUANTITY,
      payload: { price: product.price, id: product.id },
    });
  };

  return (
    <ItemList>
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {basketProduct ? (
        <ButtonWrapper>
          <button
            onClick={() => {
              decereaseQuantity(product);
            }}
          >
            -
          </button>
          <p>{basketProduct.quantity}</p>
          <button
            onClick={() => {
              incereaseQuantity(product);
            }}
          >
            +
          </button>
        </ButtonWrapper>
      ) : (
        <AddButton
          onClick={() => {
            addToBasket(product);
          }}
        >
          Add to basket
        </AddButton>
      )}
    </ItemList>
  );
};

export default ProductItem;
