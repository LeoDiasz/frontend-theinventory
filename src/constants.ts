

export const PAGE = {
    LOGIN: () => "/",
    HOME: () => "/home",
    LIST_PRODUCTS: () => "/produtos/listagem",
    CREATE_PRODUCTS: () => "/produtos/cadastrar",
    LIST_MOVIMENTS: () => "/movimentacoes/:id/:name",
    CREATE_MOVIMENTS: () => "/movimentacoes/cadastrar/:id/:name/:type"
} 

export const REQUIRED_MSG = "Campo Obrigatório";
export const MAX_MSG = "Maximo 100";
export const MIN_MSG = "Minimo 1";