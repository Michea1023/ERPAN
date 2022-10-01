import {client} from '../dataBase';
import { User , NewUser, UserLogin} from '../types/user_types';

const bcrypt = require('bcryptjs');

/**
 * @param userLogin usuario que se esta iniciando sesion
 * @return {userData} datos del usuario
 */
export const getUser = async (userLogin: UserLogin):Promise<User | undefined> => {
    const query = `SELECT * FROM business WHERE email = '${userLogin.email}'`;
    const result = await client.query(query)
    if(result.rowCount > 0) {
        const userData = await result.rows[0];
        const validPassword = await bcrypt.compare(userLogin.password, userData.passw);
        if(validPassword){
            return userData;
        }
    }
    return undefined;
};

/**
 * 
 * @param newUser nuevo usuario que se esta registrando al sistema
 * @returns boolean
 */
export const createUser = async (newUser: NewUser) => {
    const passwordEncript = await bcrypt.hash(newUser.password,10)
    const query = `insert into business(name_business,email,passw,short_name) values('${newUser.name_business}','${newUser.email}','${passwordEncript}','${newUser.short_name}');`
    try {
        await client.query(query);
        return true;
    }catch(err){
        console.error(err);
        return false;
    }
}
    

