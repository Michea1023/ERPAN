import express from "express";
import { createToken, createTokenStatic } from "../middleware/token";
import { addBlackList, createSession, getSession } from "../services/tokenServices";
import { createUser, deleteUser, getUser } from '../services/userServices';
import { NewSession } from "../types/session_types";
import { NewUser, User, UserLogin, UserResponse } from "../types/user_types";
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});


const router = express.Router();


router.post("/login", async (req, res) => {
    const userLogin: UserLogin = req.body;
    const userData = await getUser(userLogin);
    if (userData != undefined) {
        const session = await getSession(userData.id)
        if(session != undefined) {
            const TOKEN = createToken(userData);
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
    var user: User | undefined;
    if(newUser.password === newUser.password_confirm){
        if(await createUser(newUser)){
            const userLogin: UserLogin = {
                email: newUser.email,
                password: newUser.password
            };
            user = await getUser(userLogin);
            const TOKEN = createTokenStatic(user);
            const TOKEN_TEMPORALS = createToken(user);
            const userResponse: UserResponse = {
                name_business: newUser.name_business,
                token: TOKEN_TEMPORALS
            };
    
            const newSession:NewSession = {
                id_business:user?.id,
                token:TOKEN,
                admin:false,
                date_created: new Date().toLocaleDateString('en-US')
            };
            if(await createSession(newSession)){
                res.status(200).send(userResponse);
            }
        }else{
            await deleteUser(user?.id)
            res.status(404);
        }
    }else{
        res.status(404).send("Contraseñas no coinciden")
    }
    
    
});

router.delete("/logout",async (req,res) => {
    const token = req.get('Authorization')?.substring(7);
    if(await addBlackList(token)){
        res.status(200).send("Session ha expirado");
    } else {
        res.status(400).send("No se ha cerrado la session");
    }
});


export default router;