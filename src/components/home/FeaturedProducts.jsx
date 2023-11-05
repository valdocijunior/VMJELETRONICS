import React from "react";
import useData from "../../hooks/useData";

import "./FeaturedProducts.css";
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData("/products/featured");
  console.log(data);
  const skeletons = [1, 2, 3];
  return (
    <section className="featured_products">
      <h2>Produtos em Destaque</h2>
      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
