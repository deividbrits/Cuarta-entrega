const express = require ('express');
const RegistroUsuario = require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/controllers/controller.js');

const router = express.Router();

router.post("/usuario", RegistroUsuario.userController);

module.exports = router ;

