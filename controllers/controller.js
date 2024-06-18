const {Usuario, Reserva} =  require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/models /models.js');
const moment = require ('moment');

let users = [];
let reservationsToconfirm = [];
let reservations = [];



exports.addUsuario = async (req, res ) => {
   const {name,email,phone,role } = req.body;
   const newUsuario = new Usuario (
      users.length + 1,
      name,
      email,
      phone,
      role,
      moment()

   ); 
 
 users.push(newUsuario);

 res.json ({
      msj: "Usuario Creado con éxito",
      data: newUsuario,
 });

};

exports.addReserva = async (req,res) => {
const {hotel,inicio, fin,huespedesNum,tipoHabitacion,estado,pago} = req.body;
const newReserva = new Reserva (
      reservationsToconfirm.length +1,
      hotel,
      inicio,
      fin,
      huespedesNum,
      tipoHabitacion,
      estado,
      pago,
)  ;

reservationsToconfirm.push (newReserva)

console.log(newReserva)

res.json({
    msj :"Confirma Datos de tu Reserva",
    data : newReserva 
})

console.log(reservationsToconfirm)

}

exports.getReservaByID = async (req,res) => {
   console.log(reservationsToconfirm)
   console.log(req.params)
   const reservationID = parseInt(req.params.id);
   console.log('reservationID', reservationID);
   if (reservationID) {
   const reserv = reservationsToconfirm.find (reserv => reserv.idReserv === reservationID );

   console.log('reserv',reserv)

   if (!reserv) {
      return res.status (404).json ({msj : "reserva no existe"}); 
      
   }
    return res.json({
      msj : 'reserva obtenida con éxito',
      data : reserv
    });
   } else {
      return res.status(400).json ({msj : "parametro IdReserv no existe"});
   
   }

    
}

exports.updateReservaByID = async (req,res) => {
   console.log(req.params)
   console.log(reservationsToconfirm)
   const reservationID = parseInt (req.params.id);
   const reservationIndex = reservationsToconfirm.findIndex (newReserva => newReserva.idReserv === reservationID);
   console.log(reservationID)
   console.log(reservationIndex)
   

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
// exports.getAllreservs = async (req,res) => {
//    const {estado} = req.body 
//    const confirmReservs = reservations.filter (reserv => reserv.estado === "confirmado");
//  console.log(confirmReservs);
//    if (confirmReservs.length === -1) {
//       return res.status(404).json ({msj : "no hay reservas confirmadas"});
//    }
// if (estado === "confirmado") {
//    return res.json ({
//       msj : 'reservas obtenidas',
//       data : reservations
//    })

// } 

exports.getAllreservs = async (req,res) => {
   const {hotel,tipoHabitacion,inicio,fin,huespedesNum,estado,pago} = req.query; 
   const confirmReservs = reservations.filter (reserv => reserv.estado === "confirmado");
 console.log(confirmReservs);
   if (confirmReservs.length === -1) {
      return res.status(404).json ({msj : "no hay reservas confirmadas"});
   }
if (estado === "confirmado") {
   return res.json ({
      msj : 'reservas obtenidas',
      data : reservations
   })
   } else if(inicio && fin) {
      const fechaInicio = inicio;
      const fechaFin = fin

      const indiceInicio = reservations.findIndex (reserv => reserv.inicio === fechaInicio);
      const indiceFin = reservations.findIndex (reserv => reserv.fin === fechaFin) ;

      const filteredReservs = reservations.filter (reservation => {
         return reservation.inicio >= fechaInicio && reservation.fin <= fechaFin
      });
      console.log(indiceInicio,indiceFin);
      console.log(filteredReservs)
      if (filteredReservs.length === 0) {
         return res.status(404).json ({msj : "no hay reservas confirmadas para este criterio"});
      }
      return res.json ({
         msj : 'reservas obtenidas',
         data : filteredReservs
      });
 } else if (hotel) {
   const filteredReservs = reservations.filter (reserv => reserv.hotel === hotel);
if (filteredReservs.length === 0) {
   return res.status(404).json ({msj : "no hay reservas confirmadas para este criterio"});
}
return res.json ({
   msj : 'reservas obtenidas',
   data : filteredReservs
});
 } else if (tipoHabitacion) {
   const filteredReservs = reservations.filter (reserv => reserv.tipoHabitacion === tipoHabitacion);
   if (filteredReservs.length === 0) {
      return res.status(404).json ({msj : "no hay reservas confirmadas para este criterio"});
   }
   return res.json ({
      msj : 'reservas obtenidas',
      data : filteredReservs
   });
 } else if (huespedesNum) {
   const filteredReservs = reservations.filter (reserv => reserv.huespedesNum === huespedesNum);
if (filteredReservs.length === 0) {
   return res.status(404).json ({msj : "no hay reservas confirmadas para este criterio"});
}
return res.json ({
   msj : 'reservas obtenidas',
   data : filteredReservs
})} else if(pago) {
   const filteredReservs = reservations.filter (reserv => reserv.pago === pago);
   if (filteredReservs.length === 0) {
      return res.status(404).json ({msj : "no hay reservas confirmadas para este criterio"});
   }
   return res.json ({
      msj : 'reservas obtenidas',
      data : filteredReservs
   });
}
}  

 exports.deleteReservaByID = async (req,res) => {
   const reservationID = parseInt (req.params.id);
   const reservationIndex = reservations.findIndex (newReserva => newReserva.idReserv === reservationID) 

   if (reservationIndex === -1) {
      return res.status(404).json ({msj : "reserva no existe "});
   }

   reservations.splice(reservationIndex,1);

   console.log(reservations)

   return res.json ({
      msj : 'reserva eliminada',
      data : reservations
   })
}
