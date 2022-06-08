import express from 'express';
import dotenv from 'dotenv';

import conectarDB from './config/db.js';
import veterinariaRoutes from './routes/veterinariaRoutes.js'

dotenv.config();
const port = process.env.PORT;

const app = express();
/* conectar BD */
conectarDB();

/* Leer el body */
app.use( express.json() );

/* Rutas */
app.use('/api/veterinarios', veterinariaRoutes);

/* Correr el server */
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ', port)
});