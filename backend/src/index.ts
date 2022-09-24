import express from 'express';

const cors = require('cors')

import userRouter from "./routers/users"

const app = express();

app.use(express.json()); //middleware que trasforma la req.body a un jason
app.use(express.urlencoded({ extended:false }));
app.use(cors())


app.get('/ping', (_req, res) => {
    console.log("ya esta listo!!! ");
    res.send('pong');
});


/* rutas para el modelo usuario  */
app.use('/api', userRouter);

/* rutas*/




const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});