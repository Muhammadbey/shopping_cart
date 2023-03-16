import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/reducers/slices/basketSlice";
import { getBasketProductsItem } from "../../store/selectors";
import { AddButton, ButtonWrapper, ItemList } from "./style";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const basketProducts = useSelector(getBasketProductsItem);

  const basketProduct = basketProducts.find(
    (basketItem) => basketItem.id === product.id
  );

  const addToBasket = (product) => {
    dispatch(basketActions.add(product));
  };

  const removeFromBasket = (product) => {
    dispatch(basketActions.remove(product));
  };

  const incereaseQuantity = (product) => {
    const { id, price } = product;

    dispatch(basketActions.increaseQuantity({ id, price }));
  };

  const decereaseQuantity = (product) => {
    const { id, price } = product;

    if (basketProduct.quantity <= 1) {
      removeFromBasket(product);
      return;
    }
    dispatch(basketActions.decreaseQuantity({ id, price }));
  };

  return (
    <ItemList key={product.id}>
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {basketProduct ? (
        <ButtonWrapper>
          <button onClick={() => decereaseQuantity(product)}>-</button>
          <p>{basketProduct.quantity}</p>
          <button onClick={() => incereaseQuantity(product)}>+</button>
        </ButtonWrapper>
      ) : (
        <AddButton onClick={() => addToBasket(product)}>
          Add to basket
        </AddButton>
      )}
    </ItemList>
  );
};

export default ProductItem;
