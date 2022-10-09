export interface Business_Response {
    name: string
    token: string
}

export type ProductList = Array<{
    id: number
    id_categories: number
    id_providers: number
    bar_code: number
    stock: number
    name_product: string
    price: number
}>