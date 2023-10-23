import React from "react";

import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">VMJEletronics</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Pesquisar Produtos..."
          />
          <button type="submit" className="search_button">
            Pesquisar
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={rocket} />
        <LinkWithIcon title="Produtos" link="/produtos" emoji={star} />
        <LinkWithIcon title="Login" link="/login" emoji={idButton} />
        <LinkWithIcon title="Registrar" link="/signup" emoji={memo} />
        <LinkWithIcon title="Meus Pedidos " link="/pedidos" emoji={order} />
        <LinkWithIcon title="Sair" link="/logout" emoji={lock} />
        <a href="/carrinho" className="align_center">
          Carrinho <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
