import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogined } from "../../store/selectors";
import { ROUTES } from "../Router/Router";

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector(getIsLogined);

  if (!isLogin) return <Navigate to={ROUTES.LOGIN} />;
  return <Outlet /> || children;
};

export default ProtectedRoute;
