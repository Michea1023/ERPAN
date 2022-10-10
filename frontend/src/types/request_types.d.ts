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
    id_business?: number
    id_providers: number
    id_categories: number
    bar_code?: number
    stock: number
    price: number
}