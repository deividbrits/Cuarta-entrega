class Usuario {
    constructor (identificador,nombre,phone, email,role,creationDate) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.phone = phone; 
        this.email = email;
        this.role = role;
        this.creationDate = creationDate;
        
    
    }

    

    }; 

// class Hotel {
//     constructor (nameHotel,habitaciones) {
//         this.nameHotel = nameHotel;
//         this.habitaciones = habitaciones; 
        
    
    
//     }
// };

class Reserva {
    constructor (idReserv,hotel,inicio, fin,huespedesNum,tipoHabitacion,estado) {

        this.idReserv = idReserv;
        this.hotel = hotel ;
        this.inicio = inicio;
        this.fin = fin;
        this.huespedesNum = huespedesNum;
        this.tipoHabitacion= tipoHabitacion;
        this.estado = estado;
        
    }

   
    };

    // class Estado {
    //     constructor (confirmado, pendiente, rechazado) {
    //         this.confirmado = confirmado; 
    //         this.pendiente = pendiente;
    //         this.rechazado = rechazado ;

    //     }
    // };

module.exports = {Usuario,Reserva} ;
  