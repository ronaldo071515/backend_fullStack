import Router from 'express';

import { 
    autenticar,
    confirmar,
    perfil,
    registrar
} from '../controllers/veterianrioController.js';


const router = Router();

router.post('/', registrar);

router.get('/perfil', perfil);

router.get('/confirmar/:token', confirmar);

router.post('/login', autenticar);


export default router;