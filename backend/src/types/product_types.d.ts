export interface Product {
    id: Number,
    id_business: Number,
    id_categories: Number,
    id_providers: Number,
    bar_code: Number,
    stock: Number,
    name_product: String,
    price: Number
}

export type NewProduct = Omit<Product, "id">

export type UpdateProduct = Omit<Product, "id" | "id_business" | "id_categories" | "id_providers">