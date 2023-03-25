import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Router, { ROUTES } from "./components/Router/Router";
import { getIsLoggedIn } from "./store/selectors";

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      if (pathname === ROUTES.LOGIN) {
        return;
      }
      return navigate(ROUTES.REGISTER);
    }
  }, [isLoggedIn, pathname, navigate]);

  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;
