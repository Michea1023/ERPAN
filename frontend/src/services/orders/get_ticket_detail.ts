import {HOST} from "../../settings";
import {ProductResponse, TicketDetail} from "../../types/response_types";

const get_ticket_detail = (id: string):Promise<Array<TicketDetail>> => {
    return fetch(HOST + 'ticket-detail/' + id, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("tokenERPAN")
        },
    }).then(response => {
        if (!response.ok) throw new Error("Bad Response: " + String(response.status))
        return response.json()
    }).then((response: Array<TicketDetail>) => {
        return response
    }).catch((err) => {
        alert(err)
        return []
    })
}

export default get_ticket_detail