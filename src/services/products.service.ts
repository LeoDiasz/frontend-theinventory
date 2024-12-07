import { request } from "./api"

interface ICreateProductProps {
    name: string
    ean: string,
    quantity: string,
    min_replenishment: string
}

export class ProductsService {
    private static INSTANCE: ProductsService

    async getProducts() {

        const {data} = await request.get("/snacks")

        return data
    }

    async createProduct(body: ICreateProductProps) {

        await request.post("/snacks", body)
    }


    static getInstance() {
        if(!this.INSTANCE) this.INSTANCE = new ProductsService()
        return this.INSTANCE
    }
}