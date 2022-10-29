/*
this file contains the request types
 */
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
    bar_code: number
    stock: number
    price: number
}