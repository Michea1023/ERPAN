import express from "express";
import { addTicket, deleteTicket, getAll, getTicket, updateTicket } from "../services/ticketServices";
import { NewTicket, TicketUpdate } from "../types/ticket_types";


const router = express.Router();

router.use(function(_req, _res, next){
    next()
})


router.get('/', async (req, res) => {
    const { id_business } = req.body;
    const allTickets = await getAll(id_business);
    res.send(allTickets);

});


router.get('/:id', async (req, res) => {
    const { id_business } = req.body;
    const ticket  = await getTicket(parseInt(req.params.id), id_business);
    if (ticket != undefined) {
        res.status(200).send(ticket)
    }else{
        res.status(404).send(undefined)
    }
});


router.post('/', async (req, res) => {
    const newTicket: NewTicket = req.body;
    if(await addTicket(newTicket)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


router.put('/:id', async (req, res) => {
    const ticketUpdate: TicketUpdate = req.body;
    if(await updateTicket(parseInt(req.params.id),ticketUpdate)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


router.delete('/:id', async (req, res) => {
    if(await deleteTicket(parseInt(req.params.id))){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});


export default router;