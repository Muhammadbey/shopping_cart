import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { basketActions } from "../../store/reducers/slices/basketSlice";
import { getBasketProductsItem } from "../../store/selectors";
import { AddButton, ButtonWrapper, ItemList } from "./style";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basketProducts = useSelector(getBasketProductsItem);

  const basketProduct = basketProducts.find(
    (basketItem) => basketItem.id === product._id
  );


  const addToBasket = () => {
    const { _id: id, price } = product;
    dispatch(basketActions.add({ id, price }));
  };

  const removeFromBasket = () => {
    const { _id: id, price } = product;

    dispatch(basketActions.remove({ id, price }));
  };

  const incereaseQuantity = () => {
    const { _id: id, price } = product;

    dispatch(basketActions.increaseQuantity({ id, price }));
  };

  const decereaseQuantity = () => {
    if (basketProduct.amount <= 1) {
      removeFromBasket(product);
      return;
    }
    const { _id: id, price } = product;
   

    dispatch(basketActions.decreaseQuantity({ id, price }));
  };

  return (
    <ItemList
      key={product._id}
      onClick={() => {
        navigate(`/products/${product._id}`);
      }}
    >
      <img src={product.picture} alt="" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {basketProduct ? (
        <ButtonWrapper>
          <button
            onClick={(e) => {
              e.stopPropagation();
              decereaseQuantity();
            }}
          >
            -
          </button>
          <p>{basketProduct.amount}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              incereaseQuantity();
            }}
          >
            +
          </button>
        </ButtonWrapper>
      ) : (
        <AddButton
          onClick={(e) => {
            e.stopPropagation();
            addToBasket();
          }}
        >
          Add to basket
        </AddButton>
      )}
    </ItemList>
  );
};

export default ProductItem;
