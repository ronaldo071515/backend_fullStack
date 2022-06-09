import jwt from 'jsonwebtoken';

import Veterinario from '../models/Veterinario.js';


const checkAuth = async (req, res, next) => {
    let token;
    if( req.headers.token && req.headers.token.startsWith('Bearer') ) {
        try {
            token = req.headers.token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.KEY_JWT);
            req.veterinario = await Veterinario.findById(decoded.id).select('-password -token -confirmado');
            return next();
        } catch (error) {
            console.log(error);
            const e = new Error('Token no válido');
            return res.status(403).json({
                msg: e.message
            });
        }

    }

    if( !token ) {
        const error = new Error('Token no válido o inexistente');
        res.status(403).json({
            msg: error.message
        });
    }

    next();
}


export default checkAuth;