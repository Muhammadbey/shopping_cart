import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BasketPage from "../../pages/BasketPage/BasketPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import UserPage from "../../pages/UserPage/UserPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/products/:id",
  BASKET: "/basket",
  REGISTER: "/register",
  LOGIN: "/login",
  MY_PROFILE: "/myprofile",
};
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.PRODUCTS} />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.MY_PROFILE} element={<UserPage />} />
          <Route path={ROUTES.BASKET} element={<BasketPage />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default Router;
