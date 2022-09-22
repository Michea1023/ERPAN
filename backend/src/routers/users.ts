import express from "express";
import { getUser } from '../services/userServices';

const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, pass} = req.body;
    const usuario = await getUser(email,pass);
    res.send(usuario.name_business)
});

router.post("/post", (_req, res) => {
    res.send("usuario cargado")
});



export default router;