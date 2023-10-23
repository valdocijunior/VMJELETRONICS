import React from "react";

import "./MyOrderPage.css";
import Table from "../common/Table";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Pedido", "Produtos", "Total", "Status do Pedido"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iphone, Power Bank</td>
            <td>$1299</td>
            <td>Enviado</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
