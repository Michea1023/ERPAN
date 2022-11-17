import express from 'express';
import authRouter from './auth';
import productRouter from './products';
import providerRouter from './provider';
import categoryRouter from './category';
import userRouter from './user';
import ticketRouter from './ticket';


const router = express.Router();

/* A way to organize your routes. */
router.use("/",authRouter);
router.use('/products', productRouter);
router.use('/providers',providerRouter);
router.use('/categories',categoryRouter);
router.use('/user',userRouter);
router.use("/tickets",ticketRouter);

export default router;