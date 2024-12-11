
export type movimentsProduct = {
    type: string
    amount: number;
    date: Date;
}

export interface ProductResponse {
    uid?: string;
    name?: string;
    codBar?: string;
    type?: string;
    amount?: number;
    amountMin?: number;
    amountMax?: number;
    date?: Date;
    moviments?: movimentsProduct[]
}