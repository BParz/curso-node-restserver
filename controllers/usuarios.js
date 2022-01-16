const { response, request } = require('express');


const getUsuarios = (req = request, res = response) => {
    const { nombre, page } = req.query;


    res.json({
        ms: 'get API',
        nombre,
        page
    })
};

const putUsuarios = (req, res = response) => {
    const id = req.params.id;

    res.json({
        ms: 'put API',
        id
    })
};

const postUsuarios = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
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