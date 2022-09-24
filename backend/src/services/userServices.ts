import {client} from '../dataBase';
import { User , NewUser, UserLogin} from '../types/user_types';

/**
 * @param userLogin usuario que se esta iniciando sesion
 * @return {userData} datos del usuario
 */
export const getUser = async (userLogin: UserLogin):Promise<User | undefined> => {
    const query = `SELECT * FROM business WHERE email = '${userLogin.email}' AND passw = '${userLogin.password}'`;
    const result = await client.query(query)
    console.log(result)
    if(result.rowCount > 0) {
        const userData = await result.rows[0];
        return userData;
    }
    return undefined;
};

/**
 * 
 * @param newUser nuevo usuario que se esta registrando al sistema
 * @returns boolean
 */
export const createUser = async (newUser: NewUser) => {
    const query = `insert into business(name_business,email,passw,short_name) values('${newUser.name_business}','${newUser.email}','${newUser.password}','${newUser.short_name}');`
    try {
        await client.query(query);
        return true;
    }catch(err){
        console.error(err);
        return false;
    }
}
    

