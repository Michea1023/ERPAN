import { client } from "../dataBase";
import { Ticket, NewTicket, TicketUpdate } from "../types/ticket_types";


/**
 * This function returns all the tickets of a business
 * @param {number} id_business - number
 * @returns An array of Ticket objects.
 */
export const getAll = async (id_business: number): Promise<Ticket[]> => {
    const query = `SELECT * FROM tickets WHERE id_business=${id_business}`
    const result = await client.query(query);
    const allTickets = result.rows;
    return allTickets;
};

/**
 * It returns a ticket if it exists, otherwise it returns undefined
 * @param {number} id - number, id_business: number
 * @param {number} id_business - number
 * @returns A promise that resolves to a ticket or undefined.
 */
export const getTicket = async (id: number, id_business: number): Promise<Ticket | undefined> =>{
    const query = `SELECT * FROM tickets WHERE id =${id} AND id_business = ${id_business}`;
    const result = await client.query(query);
    if(result.rowCount > 0) {
        const ticket: Ticket = result.rows[0];
        return ticket;
    }
    return undefined;
};

/**
 * It takes a newTicket object, which is of type NewTicket, and inserts it into the database.
 * @param {NewTicket} newTicket - NewTicket
 * @returns A promise that resolves to a boolean.
 */
export const addTicket = async (newTicket: NewTicket) => {
    const query = `insert into tickets(id_business,general_price,selled_date) values (${newTicket.id_business},${newTicket.general_price},'${newTicket.selled_date}');`
    try {
        await client.query(query);
        return true;
    }catch (err) {
        console.log(err);
        return false;
    };

};

/**
 * It updates a ticket in the database
 * @param {number} id - number
 * @param {TicketUpdate} ticketUpdate
 * @returns A boolean value.
 */
export const updateTicket = async (id: number, ticketUpdate: TicketUpdate) => {
    const query = `update tickets set general_price = ${ticketUpdate.general_price}, selled_date = '${ticketUpdate.selled_date}' where id = ${id};`;
    try {
        await client.query(query);
        return true;
    }catch (err) {
        console.log(err);
        return false;
    };
};

/**
 * It deletes a ticket from the database.
 * @param {number} id - number
 * @returns A boolean value.
 */
export const deleteTicket = async (id: number) => {
    const query = `DELETE FROM tickets WHERE id = ${id};`;
    try {
        await client.query(query);
        return true;
    }catch (err) {
        console.log(err);
        return false;
    };
};