const express = require ('express');
const userControllers = require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/controllers/controller.js');

const router = express.Router();

router.post('/usuario', userControllers.addUsuario);
router.post('/reservas' ,userControllers.addReserva);
// router.post('/reserva/status',userControllers.getStatus);
router.get('/reservas/:id',userControllers.getReservaByID);
router.put ('/reservas/:id', userControllers.updateReservaByID);
module.exports = router ;

