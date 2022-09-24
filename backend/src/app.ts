import express from 'express';
import routers from "./routers/index";


const cors = require('cors');

const app = express();


//middlewares
app.use(express.json()); //middleware que trasforma la req.body a un json
app.use(express.urlencoded({ extended:false }));
app.use(cors())


app.get('/ping', (_req, res) => {
    console.log("ya esta listo!!! ");
    res.send('pong');
});


/* rutas */
app.use('/api', routers);



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});