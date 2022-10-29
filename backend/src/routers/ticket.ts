import express from "express";
import { addTicket, deleteTicket, getAll, getTicket, updateTicket } from "../services/ticketServices";
import { NewTicket, TicketUpdate } from "../types/ticket_types";
import verifyToken from "../middleware/verifyToken";
import { decodeToken } from "../middleware/token";

const router = express.Router();
router.use(verifyToken);

router.get('/', async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const allTickets = await getAll(dataToken.id);
    res.send(allTickets);

});


router.get('/:id', async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const ticket  = await getTicket(parseInt(req.params.id), dataToken.id);
    if (ticket != undefined) {
        res.status(200).send(ticket)
    }else{
        res.status(404).send(undefined)
    }
});


router.post('/', async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const {general_price,selled_date} = req.body;
    const newTicket: NewTicket = {
        id_business: dataToken.id,
        general_price: general_price,
        selled_date: selled_date
    };
    if(await addTicket(newTicket)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


router.put('/:id', async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const {general_price,selled_date} = req.body;
    const ticketUpdate: TicketUpdate = {
        general_price: general_price,
        selled_date: selled_date
    };
    if(await updateTicket(parseInt(req.params.id),dataToken.id,ticketUpdate)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


router.delete('/:id', async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    if(await deleteTicket(parseInt(req.params.id),dataToken.id)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


export default router;