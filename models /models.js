class Usuario {
    constructor (identificador,nombre,phone, email) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.phone = phone; 
        this.email = email;
    }

    

    }; 

class Hotel {
    constructor (nameHotel,habitaciones) {
        this.nameHotel = nameHotel;
        this.habitaciones = habitaciones; 
        
    
    
    }
};

class Reserva {
    constructor (inicio, fin,huespedesNum,tipoHabitacion) {
        this.inicio = inicio;
        this.fin = fin;
        this.huespedesNum = huespedesNum;
        this.tipoHabitacion= tipoHabitacion;
        
        
    }

   
    };

    class Estado {
        constructor (confirmado, pendiente, rechazado) {
            this.confirmado = confirmado; 
            this.pendiente = pendiente;
            this.rechazado = rechazado ;

        }
    };

module.exports = {Usuario, Hotel,Reserva, Estado } ;
  