import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "../../store/selectors";
import { ROUTES } from "../Router/Router";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) return <Navigate to={ROUTES.LOGIN} />;
  return <Outlet /> || children;
};

export default ProtectedRoute;
