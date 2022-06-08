import jwt from 'jsonwebtoken';

const generarJWT = (id) => {

    return jwt.sign({id}, process.env.KEY_JWT, {
        expiresIn: '30d'
    })

}


export default generarJWT;