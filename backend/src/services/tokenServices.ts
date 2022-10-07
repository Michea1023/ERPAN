import { client } from "../dataBase";
import { NewSession, Session } from '../types/session_types';



export const createSession = async (newsession: NewSession) => {
    const query = `insert into token_business(id_business,token,is_admin,date_init) values(${newsession.id_business},'${newsession.token}',${newsession.admin},'${newsession.date_created}')`
    try {
        await client.query(query);
        return true;

    }catch(err) {
        console.error(err);
        return false;
    }
};

export const getSession = async (id_business:Number): Promise<Session | undefined> => {
    const query = `select * from token_business tb where id_business = ${id_business}`
    const result = await client.query(query);
    if(result.rowCount > 0){
        const session:Session = result.rows[0];
        return session
    }
    return undefined;

};


export const existsToken = async (token:string): Promise<boolean> => {
    const query = `select * from token_business where token = '${token}'`
    const result = await client.query(query);
    if(result.rowCount > 0) {
        return true;
    }
    return false;

};