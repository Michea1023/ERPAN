import express from "express";
import verifyToken from "../middleware/verifyToken";
import { addCategory, deleteCategory, getAll, getCategory, searchCategory, updateCategory } from "../services/categoryServices";
import { Category } from "../types/category_types";

const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});

const router = express.Router();
router.use(verifyToken);

router.get("/",async (_req,res) => {
    const categories = await getAll();
    res.status(200).send(categories);
});

router.post("/",async (req,res) => {
    const newCategory:Category = req.body;
    if(await addCategory(newCategory)){
        res.status(200).send(newCategory);
    }else{
        res.status(404).send("Error al agregar el Categoria");
    }
});

router.put("/:id",async (req,res) => {
    const categoryUpdate = req.body;
    if (await updateCategory(req.params.id,categoryUpdate)){
        res.status(200).send(categoryUpdate);
    }else{
        res.status(404).send("Categoria no actualizado");
    };
});

router.get("/:id",async (req,res) => {
    const category = await getCategory(req.params.id.toLowerCase());
    if (category != undefined) {
        res.status(200).send(category);
    }else{
        res.status(404).send("Categoria no encontrado");
    }
});

router.delete("/:id",async (req,res) => {
    if (await deleteCategory(req.params.id.toLowerCase())){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});

router.get("/search/:search",async (req,res) => {
    const palabra = req.params.search;
    const categories = await searchCategory(palabra.toLowerCase());
    res.status(200).send(categories);
});

export default router;