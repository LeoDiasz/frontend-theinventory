import React from "react";


interface ICardProductProps {
    snack: any
}
export const CardProduct = ({snack}: ICardProductProps) => {
  return (
    <div
      key={snack.id}
      className={`p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200 ${
        snack.quantity < snack.min_replenishment ? "bg-red-200" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-semibold">{snack.name}</h3>
      <p>
        <strong>EAN:</strong> {snack.ean}
      </p>
      <p>
        <strong>Estoque:</strong> {snack.quantity}
      </p>
      <p>
        <strong>Mínimo de Reposição:</strong> {snack.min_replenishment}
      </p>
    </div>
  );
};
