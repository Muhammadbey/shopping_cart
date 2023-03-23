import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import NewsPage from "../../pages/NewPage/NewsPage";
import BasketPage from "../../pages/BasketPage/BasketPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
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
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.NEW} element={<Navigate to={ROUTES.NEW} />} />
        </Route>
        <Route path={ROUTES.BASKET} element={<BasketPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default Router;
