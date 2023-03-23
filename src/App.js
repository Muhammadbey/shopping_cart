import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Router, { ROUTES } from "./components/Router/Router";
import { getIsLogined } from "./store/selectors";

const App = () => {
  const isLoginIn = useSelector(getIsLogined);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoginIn) {
      if (pathname === ROUTES.LOGIN) {
        return;
      }
      return navigate(ROUTES.REGISTER);
    }
  }, [isLoginIn]);

  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;
