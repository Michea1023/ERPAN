/*
this file contains the response types
 */

export interface Business_Response {
    name_business: string
    token: string
}

export type ProductList = Array<ProductResponse>

export interface ProductResponse {
    id: number
    id_categories: string
    id_providers: string
    bar_code: string
    stock: number
    name_product: string
    price: number
    cost: number
}

export interface ProviderResponse {
    name_providers: string
    id_business: number
}

export interface CategoryResponse {
    name_categories: string
}