import {client} from '../dataBase';
import { User } from '../types/user_types';

/**
 * 
 * @param user 
 * @param password 
 * @returns user or undefined
 * @description retorna los datos del usuario solicitado
 */
export const getUser = async (email:string ,password: string):Promise<User | undefined> => {
    const query = `SELECT * FROM business WHERE email = '${email}' AND passw = '${password}'`;
    const result = await client.query(query)
    if(result.rowCount > 0) {
        const user = await result.rows[0];
        return user;
    }
    return undefined;
};

