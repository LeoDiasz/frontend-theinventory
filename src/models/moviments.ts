export type IMovimentsResponse = {
    idProduct: string;
    type: string
    amount: number;
    date: string;
}

export interface ICreateMovimentRequest {
    type: string;
    amount: number;
    idProduct?: string;
}

export interface IGetMovimentRequest {
    id: string;
}