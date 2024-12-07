import React from "react";
import { PAGE } from "../../constants";
import { CardMenu } from "./CardMenu";

export const Home = () => {
  const listRoutes = [
    {
      page: PAGE.CREATE_PRODUCTS(),
      title: "Cadastrar Produto",
    },
    {
      page: PAGE.LIST_PRODUCTS(),
      title: "Produtos",
    },
    {
      page: PAGE.LIST_MOVIMENTS(),
      title: "Movimentações",
    },
  ];

  return (
    <div>
      <h1>testetetets</h1>
      {listRoutes.map((item) => (
        <CardMenu page={item.page} title={item.title} />
      ))}
    </div>
  );
};
