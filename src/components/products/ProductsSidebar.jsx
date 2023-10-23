import React from "react";

import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../navbar/LinkWithIcon";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Categoria</h2>

      <div className="category_links"></div>
      <LinkWithIcon
        title="Eletronicos"
        link="products? category=eletronicos"
        emoji={rocket}
        sidebar={true}
      />
    </aside>
  );
};

export default ProductsSidebar;
