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



class Reserva {
    constructor (idReserv,hotel,inicio, fin,huespedesNum,tipoHabitacion,estado,pago) {

        this.idReserv = idReserv;
        this.hotel = hotel ;
        this.inicio = inicio;
        this.fin = fin;
        this.huespedesNum = huespedesNum;
        this.tipoHabitacion= tipoHabitacion;
        this.estado = estado;
        this.pago = pago;
        
    }

   
    };

module.exports = {Usuario,Reserva} ;
  