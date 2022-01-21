const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emaiExiste } = require('../helpers/db-validators');

const {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
} = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El pasword es obligatorio y debe tener más de 6 carácteres').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('correo').custom(emaiExiste),
    check('rol').custom(esRolValido),
    validarCampos
], postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;