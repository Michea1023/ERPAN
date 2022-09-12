import express from 'express';

const app = express();

app.use(express.json()); //middleware que trasforma la req.body a un jason

const PORT = 3001;

app.get('/ping', (_req, res) => {
    console.log("ya esta listo!!! ");
    res.send('pong');
});


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});