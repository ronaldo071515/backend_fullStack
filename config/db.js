import mongoose from 'mongoose';

const conectarDB = async () => {

    try {

        const db = await mongoose.connect(process.env.MONGODB_CNN);

        const url = `${ db.connection.host }:${ db.connection.port }`;

        console.log(`MongoDB conectado en: ${ url }`);
    
    } catch (error) {
        console.log(`Error: ${ error }`);
        process.exit(1);//Imprime el error
    }

}


export default conectarDB;