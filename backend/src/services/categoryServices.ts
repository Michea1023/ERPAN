import { client } from "../dataBase";
import { Category } from "../types/category_types";


export const getAll = async (): Promise<Category[]> => {
    const query = `select * from categories`;
    const result = await client.query(query);
    const allCategories = result.rows;
    return allCategories;
};

export const addCategory = async (newCategory : Category) => {
    const query = `insert into categories(name_categories) values(initcap('${newCategory.name_categories}'))`;
    try {
        await client.query(query);
        return true;
    }catch (err){
        console.error(err);
        return false;
    }
};

export const updateCategory = async (id:String, categoryUpdate: Category) => {
    const query = `update categories set name_categories = initcap('${categoryUpdate.name_categories}') where lower(name_categories) = '${id}'`;
    const result = await client.query(query);
    if(result.rowCount > 0){
        return true;
    }
    return false;
};

export const getCategory = async (id: String): Promise<Category | undefined> => {
    const query = `select * from categories where lower(name_categories) = '${id}'`;
    const result = await client.query(query);
    if(result.rowCount >= 1){
        const category: Category = result.rows[0];
        return category;
    }
    return undefined;
};

export const deleteCategory = async (id: String) => {
    const query = `delete from categories where lower(name_categories) = '${id}'`;
    const result = await client.query(query);
    if(result.rowCount > 0){
        return true;
    }
    return false;
};


export const searchCategory = async (palabra: String): Promise<Category[]> => {
    const query = `select * from categories WHERE lower(name_categories) like '%${palabra}%'`;
    const result = await client.query(query);
    const providers = result.rows;
    return providers;
}