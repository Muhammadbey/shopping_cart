import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../Pages/basketPage/Basket";
import LoginPage from "../Pages/loginPage/LoginPage";
import NewsPages from "../Pages/newPage/NewsPages";
import RegisterPage from "../Pages/registerPage/RegisterPage";

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
        <Route path="/" element={<NewsPages />} />
        <Route path={ROUTES.NEW} element={<NewsPages />} />
        <Route path={ROUTES.BASKET} element={<Basket />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default Router;
