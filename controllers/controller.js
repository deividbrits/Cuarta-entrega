const {Usuario,Hotel, Reserva,Estado} =  require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/models /models.js');
const moment = require ('moment');

let users = [];
let reservations = [];

// class RegistroUsuario {

//       static userController (req,res) {
//             const usuario = new Id (req.body.identificador, req.body.nombre, req.body.email);
//             res.send(`Usuario Registrado : ${usuario.getId()}`);

      
//       }

// }
// module.exports = RegistroUsuario;

exports.addUsuario = async (req, res ) => {
   const {name,email,phone } = req.body;
   const newUsuario = new Usuario (
      users.length + 1,
      name,
      email,
      phone,
      moment()

   ); 
 
 users.push(newUsuario);

 res.json ({
      msj: "Usuario Creado con éxito",
      data: newUsuario,
 });

};

exports.addReserva = async (req,res) => {
const {inicio, fin,huespedesNum,tipoHabitacion} = req.body;
const newReserva = new Reserva (
      inicio,
      fin,
      huespedesNum,
      tipoHabitacion
);


res.json({
    msj :"Confirma Datos de tu Reserva",
    data : newReserva, 

})

}

