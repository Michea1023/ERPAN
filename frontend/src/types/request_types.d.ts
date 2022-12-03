/*
this file contains the request types
 */
import {ProductResponse} from './response_types'

export interface Business {
    email: string
    password: string
}

export interface Business_Register extends Business {
    name: string
    short_name?: string
    password_confirm: string
}

export interface Business_Login extends Business {
}

export interface Product {
    name_product: string
    id?: number
    id_providers: string
    id_categories: string
    bar_code: string
    stock: number
    price: number
    cost: number
}

export interface OrderDetail {
    id_product: number
    product: ProductResponse
    total_price: number
    amount: number
}

export interface Order {
    general_price: number
    products: Array<OrderDetail>
}
