import express from 'express';
import userRouter from './users';
import ticketRouter from './ticket';


const router = express.Router();

router.use("/",userRouter);

router.use("/ticket",ticketRouter);


export default router;