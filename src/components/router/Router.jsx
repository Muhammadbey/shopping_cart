import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BasketPage from "../../pages/BasketPage/BasketPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export const ROUTES = {
  NEW: "/news",
  BASKET: "/basket",
  REGISTER: "/register",
  LOGIN: "/login",
};
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.NEW} />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.NEW} element={<ProductsPage />} />
          <Route path={ROUTES.BASKET} element={<BasketPage />} />
        </Route>
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default Router;
