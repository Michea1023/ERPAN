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
  id: Number
  id_business: Number
  general_price: number
  selled_date: String
  selled_time: String
}

export interface TicketDetail {
  id: Number
  product_id: Number
  product: Product
  id_ticket: Number
  total_price: number
  amount: number
}
