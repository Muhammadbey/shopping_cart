import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Basket from "./components/Pages/BasketPage/Basket";
import NewsPages from "./components/Pages/NewsPage/NewsPages";
import ProductPro from "./components/ProductProvider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductPro>
        <Header />
        <Routes>
          <Route path="/" element={<NewsPages />} />
          <Route path="/news" element={<NewsPages />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </ProductPro>
    </>
  );
};

export default App;
