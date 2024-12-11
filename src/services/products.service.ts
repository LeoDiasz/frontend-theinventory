import { request } from "./api"

interface ICreateProductProps {
    name: string;
    codBar?: string;
    type: string;
    amount: number;
    amountMin: number;
    amountMax: number;
}

export class ProductsService {
    private static INSTANCE: ProductsService

    async getProducts() {

        const {data} = await request.get("/products")

        return data
    }

    async createProduct(body: ICreateProductProps) {

        await request.post("/products", body)
    }


    static getInstance() {
        if(!this.INSTANCE) this.INSTANCE = new ProductsService()
        return this.INSTANCE
    }
}