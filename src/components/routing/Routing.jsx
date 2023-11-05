import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../home/HomePage";
import ProductsPage from "../products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import CartPage from "../cart/CartPage";
import MyOrderPage from "../myorder/MyOrderPage";
import LoginPage from "../authentication/LoginPage";
import SignupPage from "../authentication/SignupPage";
import Logout from "./../authentication/Logout";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/pedidos" element={<MyOrderPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default Routing;
