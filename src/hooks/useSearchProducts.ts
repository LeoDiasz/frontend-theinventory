import { useState } from "react";
import { ProductsService } from "../services/products.service"


export const useSearchProducts = () => {
    const productsService = ProductsService.getInstance();
    const [data, setData] = useState();

    const getProducts = () => {

        productsService.getProducts()
    }

    return {
        getProducts,
        data
    }
}