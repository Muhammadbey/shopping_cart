import React, { useReducer } from "react";
import ProductItem from "../../List/ProductItem";
import { initialState, reducer } from "../../Reducer/Reducer";

import { ProductItems } from "./styles";

const ProductList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const isExistOnBasket = (prodId) => {
    state.basket.some((prod) => prod.id === prodId);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <h1 style={{ textAlign: "center", paddingTop: "25px" }}>Products</h1>

      <ProductItems>
        {state.products.map((prod) => {
          return <ProductItem key={prod.id} product={prod} />;
        })}
      </ProductItems>
    </div>
  );
};

export default ProductList;

// <li key={prod.id}>
//   <img src={prod.image} alt="" />
//   <h3>{prod.title}</h3>
//   <p>{prod.price}</p>
// </li>
