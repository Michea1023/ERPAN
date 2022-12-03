import {useEffect, useState} from "react";
import {Ticket, TicketDetail} from "../../../types/response_types";
import get_ticket_detail from "../../../services/orders/get_ticket_detail";

const INITIAL_STATE = Array<TicketDetail>()

const useModalDetail = (ticket: Ticket) => {
    const [products, setProducts] = useState<Array<TicketDetail>>([])

    useEffect(() => {
        if (ticket.id === 0) return

        get_ticket_detail(String(ticket.id)).then((res) => {
            if (res.length === 0) return

            setProducts(res)
        })
    }, [ticket])

    const clearAll = () => {
        setProducts(INITIAL_STATE)
    }

    return {products, clearAll}
}

export default useModalDetail