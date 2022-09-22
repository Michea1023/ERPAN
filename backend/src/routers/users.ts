import express from "express";
import { getUser } from '../services/userServices';
import UserResponse from "../types/user_types";

const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, pass} = req.body;
    const user = await getUser(email,pass);
    if (user != undefined) {
        const userToken: UserResponse = {
            name_business: user?.name_business,
            token:"token_express"
        }
        res.send(userToken)
    }else{
        res.status(404)
        res.send(new Error('Invalid'))
    }
    
});

router.post("/post", (_req, res) => {
    res.send("usuario cargado")
});



export default router;