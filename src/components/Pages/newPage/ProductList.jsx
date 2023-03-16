import React from "react";
import { useSelector } from "react-redux";
import { getProductsList } from "../../../store/selectors";
import ProductItem from "../../list/ProductItem";
import { Ullist } from "./styles";

const ProductList = ({product}) => {
  const products = useSelector(getProductsList);

  console.log(products);

  // const isExistOnBasket = (prodId) => {
  //   products.basket.some((prod) => prod.id === prodId);
  // };

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <h1 style={{ textAlign: "center", paddingTop: "25px" }}>Products</h1>
      <Ullist>
        {product?.map((prod) => {
          return <ProductItem key={products.id} products={prod} />;
        })}
      </Ullist>
    </div>
  );
};

export default ProductList;

// <li key={prod.id}>
//   <img src={prod.image} alt="" />
//   <h3>{prod.title}</h3>
//   <p>{prod.price}</p>
// </li>
