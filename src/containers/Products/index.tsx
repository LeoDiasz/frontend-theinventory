import React, { useState } from "react";
import { CardProduct } from "./CardProduct";

export const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div>
        <h2 className="text-xl font-semibold mb-2 mt-8">Listagem de Produtos</h2>
        <div className="mb-4">
            <input
            type="text"
            placeholder="Buscar por Nome ou EAN"
            value={searchTerm}
            onChange={() => {}}
            className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
        </div>
        </div>
    );
};
