import React, { useEffect } from "react";
import { useRef } from "react";
import ProductItem from "../List/ProductItem";
import { ProductsContainer } from "./styles";
// import { useSelector } from "react-redux";
// import { getIsLoading } from "../../store/selectors";

const ProductList = ({ products }) => {
  // const loading = useSelector(getIsLoading);

  // const isExistOnBasket = (prodId) => {
  //   products.basket.some((prod) => prod.id === prodId);
  // };

  // const containerRef = useRef()


  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "25px" }}>Products</h1>
        <ProductsContainer  >
          {products.map((prod) => (
            <ProductItem key={prod._id} product={prod} />
          ))}
        </ProductsContainer>
      </div>
    </div>
  );
};

export default ProductList;
