import { useSelect } from "@mui/base";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { AsyncThunks } from "../../store/actions";
import { getProductsList } from "../../store/selectors";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsList);

  const fetchProducts = async () => {
    const response = await dispatch(AsyncThunks.getProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
