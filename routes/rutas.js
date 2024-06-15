const express = require ('express');
const userControllers = require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/controllers/controller.js');

const router = express.Router();

router.post('/usuario', userControllers.addUsuario);
router.post('/reservas' ,userControllers.addReserva);
router.get('/reservas/:id',userControllers.getReservaByID);
router.put('/reservas/:id', userControllers.updateReservaByID)
router.get('/reservas',userControllers.getAllreservs);
router.delete('/reservas/:id', userControllers.deleteReservaByID);

module.exports = router ;

