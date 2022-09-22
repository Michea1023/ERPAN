const { Pool } = require('pg');



const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'DB_erpan',
    password: 'admin',
    port: 5432,
};


export const client = new Pool  (connectionData);

