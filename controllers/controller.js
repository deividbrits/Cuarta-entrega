const {Usuario, Reserva} =  require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/models /models.js');
const moment = require ('moment');

let users = [];
let reservationsToconfirm = [];
// let hotels = ["Hotel Paraiso", "Hotel de Rosas", "Hotel Cachuperto"]
// let rooms = ["simple", "Doble", "Delux" ]
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
const {hotel,inicio, fin,huespedesNum,tipoHabitacion,estado} = req.body;
const newReserva = new Reserva (
      reservationsToconfirm.length +1,
      hotel,
      inicio,
      fin,
      huespedesNum,
      tipoHabitacion,
      estado
);

reservationsToconfirm.push (newReserva)

res.json({
    msj :"Confirma Datos de tu Reserva",
    data : newReserva 
})

console.log(reservationsToconfirm)

}

exports.getReservaByID = async (req,res) => {
   const reservationID = parseInt (req.params.idReserv);
   const reserv = reservationsToconfirm.find (reserv => reserv.idReserv === reservationID);

   console.log(reserv)

   if (reserv === -1 ) {
      return res.status (404).json ({msj : "reserva no existe"}); 
      
   }
    return res.json({
      msj : 'reserva obtenida con éxito',
      data : reserv
    })

    
}

exports.updateReservaByID = async (req,res) => {
   const reservationID = parseInt (req.params.idReserv);
   const reservationIndex = reservationsToconfirm.findIndex (newReserva => newReserva.idReserv === reservationID);

   if (reservationIndex === -1) {
      return res.status(404).json ({msj : "reserva no existe "});
   }

   reservationsToconfirm [reservationIndex] = { ...reservationsToconfirm[reservationIndex], ...req.body };
   
   reservations.push(reservationsToconfirm[reservationIndex]);

   console.log(reservations)

   return res.json ({
      msj : 'reserva confirmada',
      data : reservationsToconfirm [reservationID]
   })

   

}

// exports.getStatus = async (req,res) => {
//    const {confirmado, pendiente , rechazado} = req.body
//    const newEstado = new Estado (
//       confirmado,
//       pendiente,
//       rechazado
//    );


// if (confirmado = true) {
//    reservations.push (newReserva);
//    res.json ({
//       msj: "tu reserva fue confirmada",
//       data : newReserva      })
// }
// if (pendiente = true) {
//    res.json ({
//       msj: "Tu reserva está pendiente , confirma tu reservación para garantizar la estadía"
//    })
// }
// else {
//    return res.status(404).json ({msj : " tu reserva fue rechazada , por favor vuelve a realizarla "})
// }




// };

