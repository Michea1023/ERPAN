import express from "express";
import verifyToken from "../middleware/verifyToken";
import { addProduct, getAll, getProduct, updateProduct, deleteProduct } from "../services/productServices";
import { decodeToken } from "../middleware/token";
import { NewProduct, UpdateProduct } from "../types/product_types";
const dotenv = require('dotenv');


dotenv.config({
    path: './.env'
});

const router = express.Router();
router.use(verifyToken);

/* A route that will be used to add a new product. */
router.post("/", async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const {id_categoria,id_providers,bar_code,stock,name_product,price} = req.body;
    const newProduct: NewProduct = {
        id_business: dataToken.id,
        id_categories: id_categoria,
        id_providers: id_providers,
        bar_code: bar_code,
        stock: stock,
        name_product: name_product,
        price: price
    };
    if(await addProduct(newProduct)){
        res.status(200).send(newProduct);
    }else{
        res.status(404).send("Error al agregar producto");
    }

});

/* This is a route that will be used to get all the products. */
router.get("/", async (req, res) => {
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const products = await getAll(dataToken.id);
    res.status(200).send(products);
});

router.put("/:id", async (req, res) => {
    //:id debe ser un parametro
    //debe retornar los datos del producto actualizado con id==":id"
    //debe acceder con token
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const productUpdate: UpdateProduct = req.body;
    if (await updateProduct(parseInt(req.params.id), productUpdate, dataToken.id)) {
        res.status(200).send(productUpdate)
    }else{
        res.status(404).send("Producto no actualizado");
    }
});

/* This is a route that will be used to get a product by id. */
router.get("/:id", async (req, res) => {
    //:id debe ser un parametro
    //request vacia
    //debe retornar los datos del producto con id==":id"
    //debe acceder con token
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    const product = await getProduct(parseInt(req.params.id),dataToken.id);
    if (product != undefined) {
        res.status(200).send(product);
    }else{
        res.status(404).send("producto no encontrado");
    }
});

/* A route that will be used to delete a product by id. */
router.delete("/:id", async(req, res) => {
    //:id debe ser un parametro
    //debe retornar true si se elimino correctamente
    //debe acceder con token
    const dataToken = decodeToken(req.get("Authorization")?.substring(7));
    if (await deleteProduct(parseInt(req.params.id),dataToken.id)){
        res.status(200).send(true);
    }else{
        res.status(404).send(false);
    }
});

router.get("/search/:search", async (_req, _res) => {
    //:search debe ser un parametro
    //debe retornar todos los productos que tengan la subcadena :search,
    //    ya sea en el nombre, categoria, o proveedor
});

export default router