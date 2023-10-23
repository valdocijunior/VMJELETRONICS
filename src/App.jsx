import React from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/home/HomePage";
import ProductsPage from "./components/products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/cart/CartPage";
import MyOrderPage from "./components/myorder/MyOrderPage";
import LoginPage from "./components/authentication/LoginPage";
import SignupPage from "./components/authentication/SignupPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        {/* <LoginPage /> */}
        <SignupPage />
      </main>
    </div>
  );
};

export default App;
