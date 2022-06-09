import Paciente from '../models/Paciente.js';

const agregarPaciente = async (req, res) => {

    const paciente = new Paciente( req.body );
    paciente.veterinario = req.veterinario._id;

    try {

        const pacienteAlmacenado = await paciente.save();
        res.json({
            msg: 'Paciente Guardado Satisfactoriamente',
            pacienteAlmacenado
        });
        
    } catch (error) {
        console.log(error);
    }

}

const obtenerPaciente = async (req, res) => {

    const pacientes = await Paciente.find().where('veterinario').equals(req.veterinario);

    res.json({
        msg: 'Listado de pacientes',
        pacientes
    });

}

const obtenerPacienteByID = async (req, res) => {

    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if( !paciente ) {
        res.status(404).json({
            msg: 'No encontrado'
        });
    }

    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ) {
        return res.json({
            msg: 'Acción no valida'
        });
    }


    res.json({
        msg: 'Paciente por ID',
        paciente
    });

}

const actualizarPaciente = async (req, res) => {

    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if( !paciente ) {
        return res.status(404).json({
            msg: 'No encontrado'
        });
    }

    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ) {
        return res.json({
            msg: 'Acción no valida'
        });
    }

    //Actualizar Paciente
    paciente.nombre = req.body.nombre || paciente.nombre;
    paciente.propietario = req.body.propietario || paciente.propietario;
    paciente.email = req.body.email || paciente.email;
    paciente.fecha = req.body.fecha || paciente.fecha;
    paciente.sintomas = req.body.sintomas || paciente.sintomas;

    try {

        const pacienteActualizado = await paciente.save();

        res.json({
            msg: 'Paciente actualizado',
            pacienteActualizado
        })
        
    } catch (error) {
        console.log(error);
    }

}

const eliminarPaciente = async (req, res) => {

    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if( !paciente ) {
        return res.status(404).json({
            msg: 'No encontrado'
        });
    }

    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ) {
        return res.json({
            msg: 'Acción no valida'
        });
    }

    try {

        await paciente.deleteOne();
        res.json({
            msg: 'Paciente Eliminado'
        });
        
    } catch (error) {
        console.log(error);
    }


}

export {
    agregarPaciente,
    obtenerPaciente,
    obtenerPacienteByID,
    actualizarPaciente,
    eliminarPaciente
}