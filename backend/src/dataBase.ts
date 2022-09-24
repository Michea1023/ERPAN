const { Pool } = require('pg');



/* conexion a base datos de railway de michea */
const connectionData = {
    user: 'postgres',
    host: 'containers-us-west-70.railway.app',
    database: 'railway',
    password: 'trf1RRKWxrdGyMeNg6Yr',
    port: 6604,
};


export const client = new Pool  (connectionData);

