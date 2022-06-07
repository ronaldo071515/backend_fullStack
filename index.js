import express from 'express';
import dotenv from 'dotenv';

import conectarDB from './config/db.js'

dotenv.config();

conectarDB();

const app = express();

const port = process.env.PORT || 8080

app.use('/', (req, res) => {
    res.send('Hola mundo');
});


app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ', port)
});