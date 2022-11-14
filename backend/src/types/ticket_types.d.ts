export interface Ticket {
    id: number,
    id_business: number,
    general_price: number,
    selled_date: Date
}

export type NewTicket = Omit<Ticket, "id">;

export type TicketUpdate = Omit<Ticket, "id" | "id_business">;