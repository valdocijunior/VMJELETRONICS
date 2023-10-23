import React from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Produtos</h2>
        <select name="Filtrar" id="" className="products_sorting">
          <option value="">Relevância</option>
          <option value="price desc">Preço Descrescente</option>
          <option value="price cresc">Preço Crescente</option>
          <option value="rate desc">Avaliações Descrescentes</option>
          <option value="rate cresc">Avaliações Crescentes</option>
        </select>
      </header>

      <div className="products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
