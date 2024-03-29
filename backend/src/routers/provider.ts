import express from "express";
import verifyToken from "../middleware/verifyToken";
import { addProvider, deleteProvider, getAll, getProvider, searchProvider, updateProvider } from "../services/providerServices";
import { decodeToken } from "../middleware/token";
import { NewProvider, Provider } from "../types/provider_type";
const dotenv = require('dotenv');


dotenv.config({
    path: './.env'
});


const router = express.Router();
router.use(verifyToken);


router.get("/",async (req,res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const providers = await getAll(dataToken.id);
    res.status(200).send(providers);
});

router.post("/",async (req,res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const {name_providers} = req.body;
    const newProvider:Provider = {
        name_providers:name_providers,
        id_business:dataToken.id
    };
    if(await addProvider(newProvider)){
        res.status(200).send(newProvider);
    }else{
        res.status(404).send("Error al agregar el proveedor");
    }
});

router.put("/:id",async (req,res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const providerUpdate:NewProvider = req.body;
    if (await updateProvider(req.params.id.toLowerCase(), providerUpdate, dataToken.id)) {
        res.status(200).send(providerUpdate)
    }else{
        res.status(404).send("Proveedor no actualizado");
    }
});

router.get("/:id",async (req,res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const provider = await getProvider(req.params.id.toLowerCase(),dataToken.id);
    if (provider != undefined) {
        res.status(200).send(provider);
    }else{
        res.status(404).send("Proveedor no encontrado");
    }
});

router.delete("/:id",async (req,res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    if (await deleteProvider(req.params.id.toLowerCase(),dataToken.id)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});

router.get("/search/:search",async (req,res) => {
    const palabra = req.params.search;
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const providers = await searchProvider(palabra.toLowerCase(),dataToken.id);
    res.status(200).send(providers);
});

export default router;