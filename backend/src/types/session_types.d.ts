export interface Session {
    id: number
    id_business: number
    token: string
    admin: boolean
    date_created: Date
}

export type NewSession = Omit<Ticket, "id">