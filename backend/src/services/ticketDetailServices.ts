import { client } from "../dataBase";
import { NewTicketDetail, TicketDetail } from "../types/ticketDetail_types";

export const getTicketDetail = async (id_ticket:Number): Promise<TicketDetail[]> => {
    const query = `select * from ticket_detail where id_ticket = ${id_ticket};`
    const result = await client.query(query);
    const allTicketDetail = result.rows;
    return allTicketDetail;
}

export const addTicketDetail = async (list_detail: Array<NewTicketDetail>,id_ticket:Number) => {

    for (let i = 0; i < list_detail.length; i++) {
        const dato = list_detail[i]
        const query = `select insert_ticket_detail(${dato.id_product},${id_ticket},cast(${dato.total_price} as money),${dato.amount});`
        try{
            const result = await client.query(query);
            return result.rows[0]
        }catch (err){
            console.error(err);
        }
        return true
    }
    /*
    list_detail.map(async (dato:NewTicketDetail) => {
        //const query = `insert into ticket_detail(id_product,id_ticket,total_price,amount) values(${dato.id_product},${id_ticket},${dato.total_price},${dato.amount});`;
        const query = `select insert_ticket_detail(${dato.id_product},${id_ticket},cast(${dato.total_price} as money),${dato.amount});`
        try{
            const result = await client.query(query);
            return result.rows[0]
        }catch (err){
            console.error(err);
        }
    });
    */
};