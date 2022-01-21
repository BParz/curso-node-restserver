const Role = require('../models/role')
const Usuario = require('../models/usuario')


const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en la DB`)
    }
}

const emaiExiste = async(correo = '') => {
    const existeMail = await Usuario.findOne({ correo });
    if (existeMail) {
        throw new Error(`El email ${correo} ya se encuentra registrado.`)
    }
}

module.exports = {
    esRolValido,
    emaiExiste
}