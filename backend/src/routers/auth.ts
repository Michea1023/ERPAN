import express from "express";
import { createSession, getSession } from "../services/tokenServices";
import { createUser, getIdUser, getUser } from '../services/userServices';
import { NewSession } from "../types/session_types";
import { NewUser, UserLogin, UserResponse } from "../types/user_types";
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});


const router = express.Router();


router.post("/login", async (req, res) => {
    const userLogin: UserLogin = req.body;
    const userData = await getUser(userLogin);
    if (userData != undefined) {
        const idUser = await getIdUser(userLogin)

        const session = await getSession(idUser)
        if(session != undefined) {
            const TOKEN = session.token;
            const UserResponse: UserResponse = {
                name_business: userData.name_business,
                token:TOKEN
            }
            res.status(200).send(UserResponse)
        }
        
    }else{
        res.status(404)
    }
    
});

router.post("/register", async (req, res) => {
    const newUser: NewUser = req.body;
    if(await createUser(newUser)){
        const userLogin: UserLogin = {
            email: newUser.email,
            password: newUser.password
        };
        const id = await getIdUser(userLogin);
        const TOKEN = jwt.sign({id:id},process.env.JWT_PRIVATE_KEY);
        const userResponse: UserResponse = {
            name_business: newUser.name_business,
            token: TOKEN
        };

        const newSession:NewSession = {
            id_business:id,
            token:TOKEN,
            admin:false,
            date_created: new Date().toLocaleDateString('en-GB')
        };
        if(await createSession(newSession)){
            res.status(200).send(userResponse);
        }
    }else{
        res.status(404);
    }
});



export default router;