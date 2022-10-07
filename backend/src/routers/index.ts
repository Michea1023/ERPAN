import express from 'express';
import authRouter from './auth';
import ticketRouter from './ticket';
import productRouter from './products'
import verifyToken from "../middleware/verifyToken";

const router = express.Router();

router.use("/",authRouter);

router.use(verifyToken)
router.use("/ticket",ticketRouter);
router.use('/products', productRouter);

export default router;