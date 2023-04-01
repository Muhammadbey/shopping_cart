import React from "react";
import { useSelector } from "react-redux";
import { getProductsList } from "../store/selectors";

const BasketProduct = ({ product }) => {
  const productList = useSelector(getProductsList);
  console.log(product);
  const basketProductList = productList.find((p) => p._id === product.id);
  console.log(basketProductList);
  return (
    <div>
      <h1>{basketProductList.name}</h1>
    </div>
  );
};

export default BasketProduct;
