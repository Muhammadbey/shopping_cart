import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket, getUser } from "../../store/selectors";
import endpoints from "../../api/endpoints";
import { api } from "../../api/axios";
import { useState } from "react";
import BasketProduct from "../../components/BasketProduct";
import { basketActions } from "../../store/reducers/slices/basketSlice";

const BasketPage = () => {
  const basket = useSelector(getBasket);
  const user = useSelector(getUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const handleCreateOrder = async () => {
    try {
      setIsLoading(true);
      await api.post(endpoints.orders.orders, { ...basket, user: user._id });
      dispatch(basketActions.clear());
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {basket.products.map((basketProd, index) => (
          <BasketProduct key={index} product={basketProd} />
        ))}
      </ul>
      <button onClick={handleCreateOrder}>click</button>
    </div>
  );
};

export default BasketPage;
