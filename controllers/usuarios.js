const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');



const getUsuarios = (req = request, res = response) => {
    const { nombre, page } = req.query;


    res.json({
        ms: 'get API',
        nombre,
        page
    })
};

const postUsuarios = async(req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //verificar si el correo existe
    // const existeEmail = await Usuario.findOne({ correo });

    // if (existeEmail) {
    //     return res.status(400).json({
    //         msj: 'El correo ya se encuentra registrado'
    //     })
    // } else {

    // }

    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync()

    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save();

    res.json({
        msg: 'post API',
        usuario
    })
};

const putUsuarios = (req, res = response) => {
    const id = req.params.id;

    res.json({
        ms: 'put API',
        id
    })
};


const deleteUsuarios = (req, res = response) => {
    res.json({
        ms: 'delete API'
    })
};

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
}