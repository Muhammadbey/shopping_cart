import React, { useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const Basket = () => {
  const { state } = useContext(ProductContext);
  console.log(state);
  return (
    <div>
      <ul>
        {state.basket.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
