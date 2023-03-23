import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../List/ProductItem";
import { getProductsList } from "../../store/selectors";
import { Ullist } from "../../pages/NewPage/styles";

const ProductList = ({ product }) => {
  const products = useSelector(getProductsList);

  
  const isExistOnBasket = (prodId) => {
    products.basket.some((prod) => prod.id === prodId);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <h1 style={{ textAlign: "center", paddingTop: "25px" }}>Products</h1>
      <Ullist>
        {products.map((prod) => {
          return <ProductItem key={products.id} product={prod} />;
        })}
      </Ullist>
    </div>
  );
};

export default ProductList;
