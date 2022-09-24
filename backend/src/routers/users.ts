import express from "express";
import { createUser, getUser } from '../services/userServices';
import { NewUser, UserLogin, UserResponse } from "../types/user_types";

const router = express.Router();


/**
 * @params email | password
 * realiza el login del usuario de manera simple, entregando el nombre
 * y un token express del usuario
 */

router.post("/login", async (req, res) => {
    const userLogin:UserLogin = req.body;
    console.log(userLogin);
    const userData = await getUser(userLogin);
    if (userData != undefined) {
        const UserResponse: UserResponse = {
            name_business: userData?.name_business,
            token:"token_express"
        }
        res.status(200).send(UserResponse)
    }else{
        res.status(404).send(undefined)
    }
    
});

/**
* @params name_business | email | passw | short_name?
* realiza el registro de un nuevo business al sistema, retornando boolean de acuerdo si 
* el usuario fue registro. 
*/
router.post("/register", async (req, res) => {
    const newUser: NewUser = req.body;
    if(await createUser(newUser)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});



export default router;