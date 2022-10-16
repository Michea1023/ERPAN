import { client } from "../dataBase";
import { NewProduct, Product, UpdateProduct } from "../types/product_types";


export const getAll = async (id_business:Number): Promise<Product[]> => {
    const query = `SELECT * FROM products pr where id_business = ${id_business}`;
    const result = await client.query(query);
    const allProducts = result.rows;
    return allProducts;
};

export const addProduct = async (newProduct: NewProduct) => {
    const query = `INSERT INTO products (id_business,id_categories,id_providers,bar_code,stock,name_product,price) VALUES(${newProduct.id_business},'${newProduct.id_categories}','${newProduct.id_providers}',${newProduct.bar_code},${newProduct.stock},'${newProduct.name_product}',${newProduct.price});`
    try {
        await client.query(query);
        return true;
    }catch (err){
        console.error(err);
        return false;
    }
};

export const getProduct = async (id: Number, id_business: Number): Promise<Product | undefined> =>{
    const query = `select * from products pr where id = ${id} and id_business = ${id_business}`
    const result = await client.query(query);
    if(result.rowCount >= 1){
        const product: Product = result.rows[0];
        return product;
    }
    return undefined;
};

export const updateProduct = async (id:Number, updateProduct:UpdateProduct, id_business:Number) => {
    const query = `UPDATE public.products SET name_product='${updateProduct.name_product}',bar_code=${updateProduct.bar_code},price=${updateProduct.price},stock=${updateProduct.stock} WHERE id=${id} and id_business=${id_business};`
    const result = await client.query(query);
    if(result.rowCount > 0){
        return true;
    }
    return false;

};

export const deleteProduct = async (id:Number, id_business:Number) => {
    const query = `DELETE FROM products WHERE id=${id} and id_business=${id_business}`;
    const result = await client.query(query);
    if(result.rowCount > 0){
        return true;
    }
    return false;
}


export const searchProduct = async (palabra:String, id_business:Number): Promise<Product[]> => {
    const query = `select * from products pr where pr.id_business = ${id_business} and lower(pr.id_categories) like '%${palabra}%' or lower(pr.id_providers) like '%${palabra}%' or lower(pr.name_product) like '%${palabra}%';`
    const result = await client.query(query);
    const products = result.rows;
    return products;
}