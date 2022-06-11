import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import conectarDB from './config/db.js';
import veterinariaRoutes from './routes/veterinariaRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js'

dotenv.config();
const port = process.env.PORT;

const app = express();
/* conectar BD */
conectarDB();

/* const dominiosPermitidos = [''];

const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1 ){
            //origen permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por cors'));
        }
    }
} */

app.use( cors() );

/* Leer el body */
app.use( express.json() );

/* Rutas */
app.use('/api/veterinarios', veterinariaRoutes);
app.use('/api/pacientes', pacienteRoutes);

/* Correr el server */
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ', port)
});