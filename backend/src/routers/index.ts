import express from 'express';
import userRouter from './users';
import ticketRouter from './ticket';
import productRouter from './products'

const router = express.Router();

router.use("/",userRouter);
router.use("/ticket",ticketRouter);
router.use('/products', productRouter);

export default router;