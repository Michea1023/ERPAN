import express from "express";
import { createUser, getUser } from '../services/userServices';
import { NewUser, UserLogin, UserResponse } from "../types/user_types";

const router = express.Router();


router.post("/login", async (req, res) => {
    const userLogin:UserLogin = req.body;
    const userData = await getUser(userLogin);
    if (userData != undefined) {
        const UserResponse: UserResponse = {
            name_business: userData.name_business,
            token:"token_express"
        }
        res.status(200).send(UserResponse)
    }else{
        res.status(404).send(undefined)
    }
    
});

router.post("/register", async (req, res) => {
    const newUser: NewUser = req.body;
    if(await createUser(newUser)){
        const userResponse: UserResponse = {
            name_business: newUser.name_business,
            token: "token_express"
        };
        res.status(200).send(userResponse);
    }else{
        res.status(404).send(false);
    }
});



export default router;