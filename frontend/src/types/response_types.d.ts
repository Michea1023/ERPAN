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

export type TicketList = Array<Ticket>

export interface Ticket {
    id: number
    id_business: number
    general_price: number
    selled_date: string
    selled_time: string
}

export interface TicketDetail {
    id: number
    id_product: number
    id_ticket: number
    name_product: string
    total_price: string
    amount: number
}
