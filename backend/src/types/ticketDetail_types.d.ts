export interface TicketDetail {
    id: Number,
    id_product: Number,
    id_ticket: Number,
    total_price: number,
    amount: number
}

export type NewTicketDetail = Omit<TicketDetail,"id","id_ticket">;