import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/Reducer";

export const ProductContext = createContext();

const ProductPro = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveDataToLocalStorage = (state) => {
    const updatedState = JSON.stringify(state);
    window.localStorage.setItem("state", updatedState);
  };
  useEffect(() => {
    saveDataToLocalStorage(state);
  }, [state]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductPro;
