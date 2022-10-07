import express from "express";
//import { getAll } from "../services/productServices";
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});




const router = express.Router();

router.post("/", async (req, _res) => {
    const token = req.get('Authorization')?.substring(7);
    let data = jwt.decode(token,process.env.JWT_PRIVATE_KEY);
    const {id} = data
    console.log(id);
    //debe retornar los datos del producto creado
    //debe acceder con token
})

router.get("/", async (_req, _res) => {
    //request vacia
    //obtiene todos los productos del usuario
    //debe acceder con token
})

router.put("/:id", async (_req, _res) => {
    //:id debe ser un parametro
    //debe retornar los datos del producto actualizado con id==":id"
    //debe acceder con token
})

router.get("/:id", async (_req, _res) => {
    //:id debe ser un parametro
    //request vacia
    //debe retornar los datos del producto con id==":id"
    //debe acceder con token
})

router.delete("/:id", async(_req, _res) => {
    //:id debe ser un parametro
    //debe retornar true si se elimino correctamente
    //debe acceder con token
})

router.get("/search/:search", async (_req, _res) => {
    //:search debe ser un parametro
    //debe retornar todos los productos que tengan la subcadena :search,
    //    ya sea en el nombre, categoria, o proveedor
})

export default router