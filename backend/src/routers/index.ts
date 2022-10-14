import express from 'express';
import authRouter from './auth';
import ticketRouter from './ticket';
import productRouter from './products'
import providerRouter from './provider'


const router = express.Router();

router.use("/",authRouter);
router.use("/ticket",ticketRouter);
router.use('/products', productRouter);
router.use('/providers',providerRouter)

export default router;