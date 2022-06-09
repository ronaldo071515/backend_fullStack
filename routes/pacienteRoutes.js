import { Router } from 'express';

import { 
    actualizarPaciente,
    agregarPaciente, 
    eliminarPaciente, 
    obtenerPaciente,
    obtenerPacienteByID
} from '../controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').post( checkAuth, agregarPaciente ).get( checkAuth, obtenerPaciente );

router.route('/:id')
    .get( checkAuth, obtenerPacienteByID )
    .put( checkAuth, actualizarPaciente )
    .delete( checkAuth, eliminarPaciente );


export default router;