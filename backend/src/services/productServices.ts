import { client } from "../dataBase";
import { Product } from "../types/product_types";


export const getAll = async (id_business:Number): Promise<Product[]> => {
    const query = `SELECT * FROM products pr where id_business = ${id_business}`;
    const result = await client.query(query);
    const allProducts = result.rows;
    return allProducts;
};