import { useEffect, useState } from "react";
import { ProductsService } from "../services/products.service"
import { ProductResponse } from "../models/products";


export const useSearchProducts = () => {
    const productsService = ProductsService.getInstance();
    const [data, setData] = useState<ProductResponse[]>([]);

    const getProducts = () => {

        productsService.getProducts().then(data => {
            setData(data)
        })
    }



    return {
        getProducts,
        data
    }
}