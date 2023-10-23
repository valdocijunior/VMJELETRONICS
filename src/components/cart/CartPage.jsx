import React from "react";

import "./CartPage.css";
import remove from "../../assets/remove.png";
import user from "../../assets/user.webp";
import Table from "../common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="Perfil do usuário" />
        <div>
          <p className="user_name">Valdoci</p>
          <p className="user_email">valdoci.jr@gmail.com</p>
        </div>
      </div>

      <Table headings={["Itens", "Preço", "Quantidade", "Total", "Remover"]}>
        <tbody>
          <tr>
            <td>Iphone 14</td>
            <td>$999</td>
            <td className="align_center table_quantity_input">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="Remove Icon"
                className="cart_remove_icon"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Frete</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">Concluir compra</button>
    </section>
  );
};

export default CartPage;
