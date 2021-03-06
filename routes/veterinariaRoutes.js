import Router from 'express';

import { 
    autenticar,
    comprobarToken,
    confirmar,
    nuevoPassword,
    olvidePassword,
    perfil,
    registrar,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterianrioController.js';
import checkAuth from '../middleware/authMiddleware.js';


const router = Router();

/* Rutas para el area publica */
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get( comprobarToken ).post( nuevoPassword );

/* Rutas Protegidas */
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);


export default router;