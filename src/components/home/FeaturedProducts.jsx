import React from "react";

import "./FeaturedProducts.css";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  return (
    <seaction className="featured_products">
      <h2>Produtos em Destaque</h2>
      <div className="align_center featured_products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </seaction>
  );
};

export default FeaturedProducts;
