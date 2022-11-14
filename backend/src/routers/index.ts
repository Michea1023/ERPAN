import express from 'express';
import authRouter from './auth';
import ticketRouter from './ticket';
import productRouter from './products';
import providerRouter from './provider';
import categoryRouter from './category';
import userRouter from './user'


const router = express.Router();

router.use("/", authRouter);
router.use("/ticket", ticketRouter);
router.use('/products', productRouter);
router.use('/providers', providerRouter);
router.use('/categories', categoryRouter);
router.use('/user', userRouter);

export default router;