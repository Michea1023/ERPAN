const { Pool } = require('pg');


/*
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'DB_erpan',
    password: 'admin',
    port: 5432,
};
*/

const connectionData = {
    user: 'postgres',
    host: 'containers-us-west-70.railway.app',
    database: 'railway',
    password: 'trf1RRKWxrdGyMeNg6Yr',
    port: 6604,
};


export const client = new Pool  (connectionData);

